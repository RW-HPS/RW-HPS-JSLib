import typescript from '@rollup/plugin-typescript'

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: './src/index.ts',
    output: {
      file: './lib/index.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
    ],
  },
]
