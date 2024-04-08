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



module.exports = {
    parserOptions: {
        ecmaVersion: 2020, // Set the ECMAScript version to 2020 (ES11).
    },
    env: {
        es6: true, // Enable ES6 features.
        node: true, // Enable Node.js environment.
    },
    extends: ["eslint:recommended"], // Extend ESLint with recommended rules.

    plugins: ["jsdoc"], // Enable the JSDoc plugin for enforcing JSDoc comments.
    rules: {
        // Custom ESLint rules and overrides.
        "no-console": 0, // Allow the use of console.log (0: off, 1: warning, 2: error).
        "indent": ["error", 4, {"SwitchCase": 1}], // Enforce 4-space indentation.
        "quotes": ["error", "double"], // Enforce double quotes for strings.
        "max-len": [1, {code: 900}], // Set the maximum line length to 900 characters.
        "camelcase": [0], // Disable the camelCase rule.
        "new-cap": [1], // Require constructor names to begin with a capital letter (1: warning).
        "no-invalid-this": [1], // Disallow the use of this outside of classes (1: warning).
        "no-undef": [1], // Disallow the use of undeclared variables (1: warning).
        "prefer-const": [1], // Prefer const over let (1: warning).
        "guard-for-in": [1], // Require for...in loops to use hasOwnProperty (1: warning).

        // JSDoc rules (1: warning, 2: error).

        "require-jsdoc": [1], // Require JSDoc comments (1: warning).

        "jsdoc/check-access": 1, // Ensure JSDoc access tags (@private, @protected, etc.) are valid (1: warning).
        "jsdoc/check-alignment": 1, // Check the alignment of JSDoc comments (1: warning).
        "jsdoc/check-indentation": [1, {"excludeTags": ["return", "returns", "openapi", "example"]}], // Check JSDoc comment indentation (1: warning).
        "jsdoc/check-line-alignment": 1, // Check the alignment of JSDoc comment lines (1: warning).
        "jsdoc/check-param-names": 1, // Ensure JSDoc parameter names match the code (1: warning).
        "jsdoc/check-property-names": 1, // Ensure JSDoc property names match the code (1: warning).
        "jsdoc/check-syntax": 1, // Validate JSDoc syntax (1: warning).
        "jsdoc/check-tag-names": ["warn", {"definedTags": ["project", "return", "openapi", "createdOn"]}], // Check JSDoc tag names (1: warning).
        "jsdoc/check-types": 1, // Ensure JSDoc types match the code (1: warning).
        "jsdoc/check-values": 1, // Check values in JSDoc comments (1: warning).
        "jsdoc/empty-tags": 1, // Check for empty JSDoc tags (1: warning).
        "jsdoc/implements-on-classes": 1, // Enforce that @implements tags are only used on classes (1: warning).
        "jsdoc/match-description": 1, // Ensure JSDoc descriptions match code (1: warning).
        "jsdoc/multiline-blocks": 1, // Require multiline JSDoc blocks for certain tags (1: warning).
        "jsdoc/no-bad-blocks": 1, // Disallow certain JSDoc block tags (1: warning).
        "jsdoc/no-defaults": 1, // Disallow default values in JSDoc (1: warning).
        "jsdoc/no-multi-asterisks": 1, // Disallow multiple asterisks in JSDoc comments (1: warning).
        "jsdoc/no-undefined-types": 1, // Disallow using undefined types in JSDoc (1: warning).
        "jsdoc/require-asterisk-prefix": 1, // Require asterisk prefix for multiline JSDoc comments (1: warning).
        "jsdoc/require-description": 1, // Require descriptions in JSDoc comments (1: warning).
        "jsdoc/require-description-complete-sentence": 1, // Require complete sentences in JSDoc descriptions (1: warning).
        "jsdoc/require-hyphen-before-param-description": 1, // Require a hyphen before param descriptions in JSDoc (1: warning).
        "jsdoc/require-jsdoc": 1, // Require JSDoc comments (1: warning).
        "jsdoc/require-param": 1, // Require JSDoc param tags (1: warning).
        "jsdoc/require-param-description": 1, // Require descriptions for JSDoc param tags (1: warning).
        "jsdoc/require-param-name": 1, // Require names for JSDoc param tags (1: warning).
        "jsdoc/require-param-type": 1, // Require types for JSDoc param tags (1: warning).
        "jsdoc/require-property": 1, // Require JSDoc property tags (1: warning).
        "jsdoc/require-property-description": 1, // Require descriptions for JSDoc property tags (1: warning).
        "jsdoc/require-property-name": 1, // Require names for JSDoc property tags (1: warning).
        "jsdoc/require-property-type": 1, // Require types for JSDoc property tags (1: warning).
        "jsdoc/require-returns": 1, // Require JSDoc returns tags (1: warning).
        "jsdoc/require-returns-check": 1, // Require @returns to have a description or type (1: warning).
        "jsdoc/require-returns-description": 1, // Require descriptions for JSDoc returns tags (1: warning).
        "jsdoc/require-returns-type": 1, // Require types for JSDoc returns tags (1: warning).
        "jsdoc/require-throws": 1, // Require JSDoc throws tags (1: warning).
        "jsdoc/require-yields": 1, // Require JSDoc yields tags (1: warning).
        "jsdoc/require-yields-check": 1, // Require @yields to have a description or type (1: warning).
        "jsdoc/sort-tags": 1, // Enforce a consistent order for JSDoc tags (1: warning).
        "jsdoc/tag-lines": 1, // Enforce consistent line spacing for JSDoc tags (1: warning).
        "jsdoc/valid-types": 1, // Enforce valid JSDoc types (1: warning).
        "valid-jsdoc": [1, {
            "prefer": {
                "return": "returns", // Prefer using @returns over @return (1: warning).
            },
        }],

    },


    ignorePatterns: ["test/*", "*/configs/jsdoc-template/*", "docs/jsdoc/*"], // Files to ignore during linting.
};

if (require.main === module) {
    const config_file = ".eslint.js"
    // Install ESLint and JSDoc as dev dependencies when executed.
    console.log("Installing ESLint as a development dependencies");
    exec("npm install --save-dev eslint jsdoc eslint-plugin-jsdoc@latest");
    console.log(`Setting ./${config_file}`);
    fs.writeFileSync("./.eslint.js", "module.exports = require(\"@cionzo/eslint-config\")");
    console.log("Updating package.json");
    const package_json_content = JSON.parse(fs.readFileSync("./package.json").toString())
    package_json_content.scripts = package_json_content.scripts || {}
    package_json_content.scripts.lint = `eslint -c ${config_file} --fix .`
    package_json_content.scripts.jsdoc = "jsdoc -P package.json -d js_docs . "
    fs.writeFileSync("./package.json", JSON.stringify(package_json_content, undefined,4))
}
