#!/usr/bin/env node
const { exec } = require("child_process");
const path = require("path");

const scriptPath = path.resolve(__dirname, "generate.sh");
console.log('PATH::', scriptPath);

exec(`bash ${scriptPath}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        process.exit(1);
    }
    console.log(stdout);
});
