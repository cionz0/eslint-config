# eslint-config

My eslint configuration.

## Installation
From your `functions` folder, run:
```bash
npm install --save-dev git+https://github.com/cionz0/eslint-config
```

## Setup
Again, from your `functions` folder, run:
```bash
npx @cionzo/eslint-config
```

This will: 
- create `functions/.eslint.js`, and 
- update `functions/package.json`.

**Don't forget** to add `.eslint.js` to your project repository, for example by running the following from your `functions`folder. 
```bash
git add .eslint.js
```

File `functions/package.json` will be updated as follows:
- _additional dev-dependencies_:
  - eslint
  - jsdoc 
  - eslint-plugin-jsdoc@latest
- _additional scripts_:
  - lint: runs the linter using the newly created configuration
  - jsdoc: generates jsdocs into `functions/js_docs` folder
  
## Usage

When needed, just run
```bash
npm run lint
```
