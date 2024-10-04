#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

console.log("Hello there!");
console.log(`Version number of the package is ${packageJson.version}`);
