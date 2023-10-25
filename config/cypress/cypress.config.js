/* eslint-disable import/no-commonjs */

const fs = require("fs");
const path = require("path");

const {defineConfig} = require("cypress");

const aliases = {};
fs.readdirSync(path.join(__dirname, "../../packages")).forEach((name) => {
    if (name.startsWith(".")) {
        return;
    }
    const stat = fs.statSync(path.join(__dirname, "../../packages", name));
    if (stat.isFile()) {
        return;
    }
    const pkgPath = path.join("../../packages", name, "package.json");
    const pkgJson = require(pkgPath);
    aliases["@khanacademy/" + name] = path.join(
        __dirname,
        "../../packages",
        name,
        pkgJson.source,
    );
});
fs.readdirSync(path.join(__dirname, "../../vendor")).forEach((name) => {
    aliases[name] = path.join(__dirname, "../../vendor", name);
});

module.exports = defineConfig({
    fixturesFolder: false,
    video: false,

    component: {
        specPattern: ["packages/**/*.cypress.{js,ts,jsx,tsx}"],
        indexHtmlFile: "config/cypress/component-index.html",
        supportFile: "config/cypress/support.js",
        devServer: {
            bundler: "webpack",
            framework: "react",
            webpackConfig: {
                resolve: {
                    alias: aliases,
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
                module: {
                    rules: [
                        // Babel loader will use your project’s babel.config.js
                        {
                            test: /\.(j|t)sx?$/,
                            exclude: /node_modules/,
                            loader: "babel-loader",
                        },
                        // Other loaders that are needed for your components
                        {
                            test: /\.css$/,
                            use: ["style-loader", "css-loader"],
                        },
                        {
                            test: /\.(less)$/,
                            use: ["style-loader", "css-loader", "less-loader"],
                        },
                        {
                            test: /\.(woff|woff2|ttf|otf)$/,
                            type: "asset/resource",
                            generator: {
                                filename: "fonts/[hash]-[name][ext]",
                            },
                        },

                        {
                            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                            type: "asset/resource",
                            generator: {
                                filename: "images/[hash]-[name][ext]",
                            },
                        },
                    ],
                },
            },
        },

        setupNodeEvents: (on, config) => {
            if (config.env["CYPRESS_COVERAGE"]) {
                require("@cypress/code-coverage/task")(on, config);
            }

            config.env.reactDevtools = true;

            return config;
        },
    },
});
