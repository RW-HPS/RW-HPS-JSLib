#!/usr/env node
const fs = require("fs")
const path = require("path")

fs.copyFileSync(path.join(__dirname, "src", "graaljs.d.ts"), path.join(__dirname, "lib", "types", "graaljs.d.ts"))