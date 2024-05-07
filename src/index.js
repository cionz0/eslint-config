#!/usr/bin/env node
/**
 * ESLint Configuration File.
 *
 * This configuration enforces coding standards and best practices for JavaScript code.
 *
 * Created on: 08/09/23.
 * @module src/index
 * @project eslint-config
 * @author cionzo <cionzo@filotrack.com>
 */

"use strict";

const fs = require("fs");
const exec = require("child_process").exec;
import settings from "eslint.config.mjs"
export default [...settings]

const CONFIG_FILENAME = "eslint.config.mjs"
const CONFIG_CONTENT = "import settings from \"@cionzo/eslint-config\"\nexport default [...settings]"

if (require.main === module) {
    // Install ESLint and JSDoc as dev dependencies when executed.
    console.log("Installing ESLint as a development dependencies");
    // exec("npm install --save-dev eslint jsdoc eslint-plugin-jsdoc@latest");
    exec("npm install --save-dev eslint");
    console.log(`Setting ./${CONFIG_FILENAME}`);
    // fs.writeFileSync(`./${config_file}`, "module.exports = require(\"@cionzo/eslint-config\")");
    fs.writeFileSync(`./${CONFIG_FILENAME}`, CONFIG_CONTENT);
    console.log("Updating package.json");
    const package_json_content = JSON.parse(fs.readFileSync("./package.json").toString())
    package_json_content.scripts = package_json_content.scripts || {}
    package_json_content.scripts.lint = `eslint --fix .`
    // package_json_content.scripts.jsdoc = "jsdoc -P package.json -r -d js_docs . "
    fs.writeFileSync("./package.json", JSON.stringify(package_json_content, undefined, 4))
}
