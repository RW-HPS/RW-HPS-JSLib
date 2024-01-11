import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
// import terser from '@rollup/plugin-terser'

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.min.js',
      format: 'esm',
    },
    plugins: [typescript()],
  },
] as RollupOptions
