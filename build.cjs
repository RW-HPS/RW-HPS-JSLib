#!/usr/env node
const fs = require('fs')
const path = require('path')
const archiever = require('archiver')

fs.copyFileSync(path.join(__dirname, 'src', 'graaljs.d.ts'), path.join(__dirname, 'lib', 'graaljs.d.ts'))
fs.copyFileSync(path.join(__dirname, 'plugin.json'), path.join(__dirname, 'lib', 'plugin.json'))

fs.unlinkSync(path.join(__dirname, 'jslib.zip'))
const output = fs.createWriteStream(path.join(__dirname, 'jslib.zip'))
const archive = archiever('zip')
archive.pipe(output)
archive.directory(path.join(__dirname, 'lib/'), false)
archive.finalize()