import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

export default {
  input: 'src/index.ts',
  output: {
    dir: dirname(fileURLToPath(import.meta.url)),
    format: 'esm',
    entryFileNames: 'lib/[name].js',
  },
  external: [
    /java:.+/,
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(), 
    typescript(),
  ],
}