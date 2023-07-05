#!/usr/env node
const fs = require('fs')
const path = require('path')
const archiever = require('archiver')

fs.copyFileSync(path.join(__dirname, 'plugin.json'), path.join(__dirname, 'lib', 'plugin.json'))

if(fs.existsSync(path.join(__dirname, 'jslib.zip'))) {
  fs.unlinkSync(path.join(__dirname, 'jslib.zip'))
}
const output = fs.createWriteStream(path.join(__dirname, 'jslib.zip'))
const archive = archiever('zip')
archive.pipe(output)
archive.directory(path.join(__dirname, 'lib/'), false)
archive.finalize()