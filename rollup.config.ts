import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      typescript(),
      copy({
        targets: [{ src: 'plugin.json', dest: 'dist/' }],
      }),
    ],
  },
] as RollupOptions
