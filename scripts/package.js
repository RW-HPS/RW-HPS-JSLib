import fs from 'node:fs'
import path from 'node:path'
import __archiver from 'archiver'
import { fileURLToPath } from 'node:url'

const __dirname = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
)

if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'))
}

const plugin = fs.createWriteStream(
  path.join(__dirname, 'dist/RW-HPS-JSLib.zip'),
)
const archiver = __archiver('zip')

archiver.pipe(plugin)

archiver.append(fs.createReadStream(path.join(__dirname, 'lib/index.js')), {
  name: 'index.js',
})
archiver.append(fs.createReadStream(path.join(__dirname, 'lib/index.js.map')), {
  name: 'index.js.map',
})
archiver.append(fs.createReadStream(path.join(__dirname, 'plugin.json')), {
  name: 'plugin.json',
})

archiver.finalize()
