/**
 * An autogenerated component that renders the EQUAL iconograpy in SVG.
 *
 * Generated with: /Users/jeremy/khan/perseus/packages/math-input/tools/svg-to-react/convert.ts
 */
import * as React from "react";

const Equal = (props: {color: string}): React.ReactNode => {
    return (
        <svg width="48" height="48" viewbox="0 0 48 48">
            <defs>
                <path id="a" d="M0 0h600v956H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path fill="none" d="M0 0h48v48H0z" />
                <path fill="none" d="M12 12h24v24H12z" />
                <path
                    d="M16 21h17M16 27h17"
                    stroke={props.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <g transform="translate(-434 -518)">
                    <mask id="b" fill="#fff">
                        <use xlinkhref="#a" />
                    </mask>
                    <use fill="#FAFAFA" xlink:href="#a" />
                    <g mask="url(#b)">
                        <path fill="none" d="M434 518h48v48h-48z" />
                        <path fill="none" d="M446 530h24v24h-24z" />
                        <path
                            d="M450 539h17M450 545h17"
                            stroke="#3B3E40"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Equal;
