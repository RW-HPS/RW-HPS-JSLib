import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: {
    dir: import.meta.url,
    format: 'esm',
    name: 'lib',
    entryFileNames: '[name].js',
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