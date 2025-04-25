Make sure you’ve done the following:
Installed Node.js and npm.

<!-- If you want to run TypeScript directly in ES module mode, you need to tell Node.js to use ts-node as the loader for .ts files. -->
node --loader ts-node/esm print.ts

<!-- If you want to avoid the module issues and use a simpler method: -->
1. Compile the TypeScript code to JavaScript:
npx tsc

2. Run the compiled JavaScript file:
node print.js


3. npm start test_name
<!-- "scripts": {
      "start": "node --loader ts-node/esm"
    }, -->
