/* eslint-disable no-console */

import * as fs from "fs";
import * as path from "path";
import * as process from "process";

import * as prettier from "prettier";
import {optimize} from "svgo";

import symbolMap from "./symbol_map";

// This is the "signal" color used in the SVGs that will tint it to whatever
// color we want. We replace instances of this color when we process the svgs
// into React components so that they become a prop value.
const color = "#3B3E40";

// Renders the component file "header" for a symbol
const renderHeader = (symbolName: string) => `/**
 * An autogenerated component that renders the ${symbolName} iconograpy in SVG.
 *
 * Generated with: ${__filename}
 */
import * as React from 'react';
`;

type RenderComponentArgs = {
    useSimple: boolean;
    symbolName: string;
    componentName: string;
    contents: string;
};

// Renders a component file
const renderComponent = ({
    useSimple,
    symbolName,
    componentName,
    contents,
}: RenderComponentArgs) => {
    if (useSimple) {
        // A simple template with no props, for the case in which there are no
        // colors in the component.
        return `${renderHeader(symbolName)}
const ${componentName} = (): React.ReactNode => {
    return (${contents});
};

export default ${componentName};
`;
    } else {
        return `${renderHeader(symbolName)}

const ${componentName} = (props: { color: string }): React.ReactNode => {
    return (${contents});
}

export default ${componentName};
`;
    }
};

// Renders the iconography index.js (exports all icon components)
const renderIndex = (filenameMap: {[symbolName: string]: string}) => {
    const indexContents = Object.keys(filenameMap)
        .map(
            (symbolName) =>
                `export {default as ${symbolName}} from './${filenameMap[symbolName]}';`,
        )
        .join("\n");

    return `/**
* A directory of autogenerated icon components.
*/

${indexContents}
`;
};

// Title-cases the given word
const title = (s: string) =>
    s.slice(0, 1).toLocaleUpperCase() + s.slice(1).toLocaleLowerCase();

const format = async (contents: string, filename: string): Promise<string> => {
    const options = await prettier.resolveConfig(filename);
    return prettier.format(contents, {parser: "babel", ...options});
};

const main = async () => {
    const inputDirName: string = process.argv[2];
    const outputDirName: string = process.argv[3];

    if (inputDirName == null) {
        throw new Error("Missing input dir name");
    }
    if (outputDirName == null) {
        throw new Error("Missing input dir name");
    }

    const filenameMap = {};

    for (const filename of fs.readdirSync(inputDirName)) {
        let useSimple = true;

        const prefix = "math-keypad-icon-";
        let svgFilename = "";
        if (filename.startsWith(prefix)) {
            svgFilename = filename.slice(prefix.length);
        } else {
            continue;
        }

        const symbolName: string | undefined | null =
            symbolMap[path.parse(svgFilename).name];
        if (symbolName == null) {
            console.warn(
                `⚠️  Skipping: '${svgFilename}' not found in symbol_map.ts`,
            );
            continue;
        }

        const componentName = symbolName.replace(/[^\W](\w+)/, (...matches) =>
            title(matches[0]),
        );
        const jsFilename = symbolName.toLocaleLowerCase().replace("_", "-");

        const rawSvg = fs.readFileSync(
            path.join(inputDirName, filename),
            "utf-8",
        );

        let optimizedSvg;
        try {
            const result = optimize(rawSvg, {
                plugins: [
                    // set of built-in plugins enabled by default
                    "preset-default",
                    "removeXMLNS",
                ],
            });
            optimizedSvg = result.data;
        } catch (err: any) {
            if (err.name === "SvgoParserError") {
                console.error(`ERROR: ${filename} contains invalid SVG:`, err);
            } else {
                console.error(`ERROR: fatal error processing ${filename}`, err);
            }
            continue;
        }

        const contents = optimizedSvg
            // Replace color so it can be passed in as props
            .replace(`"${color}"`, (match) => {
                useSimple = false;
                return "{props.color}";
            })
            // Replace the xlink:href tag (special case)
            .replace("xlink:href", "xlinkHref")
            // Replace any other tags
            .replace(/ (\S+)=/g, (tag) => {
                const [first, ...rest] = tag.split("-");
                return first.toLocaleLowerCase() + rest.map(title).join("");
            });

        const output = renderComponent({
            useSimple,
            symbolName,
            componentName,
            contents,
        });

        const outputFilename = path.join(outputDirName, jsFilename + ".tsx");
        console.log("✍🏿  Writing:", outputFilename);
        fs.writeFileSync(outputFilename, await format(output, outputFilename));
        filenameMap[symbolName] = jsFilename;
    }

    const indexContents = renderIndex(filenameMap);
    const indexFilename = path.join(outputDirName, "index.ts");

    console.log("✍🏿  Writing:", indexFilename);
    fs.writeFileSync(indexFilename, await format(indexContents, indexFilename));
};

main();
