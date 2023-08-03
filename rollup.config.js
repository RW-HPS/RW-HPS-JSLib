import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import copy from 'rollup-plugin-copy'

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.js',
        format: 'es',
      }
    ],
    external: [
      /java:.+/,
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ 
        declaration: true, 
        declarationDir: 'lib/types', 
      }),
      copy({
        targets: [
          { src: 'src/java.d.ts', dest: 'lib/types' },
          { src: 'src/graal.d.ts', dest: 'lib/types' },
        ]
      })
    ],
  },
  {
    input: 'lib/index.js',
    output: [
      {
        file: 'dist/rwhps-jslib.min.js',
        format: 'es'
      }
    ],
    external: [
      /java:.+/,
    ],
    plugins: [
      terser(),
      copy({
        targets: [
          { src: 'plugin.json', dest: 'dist' }
        ]
      }),
    ],
  },
]