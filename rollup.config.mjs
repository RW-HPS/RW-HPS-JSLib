import json from '@rollup/plugin-json'
import ts from 'rollup-plugin-ts'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'

export default {
	input: 'src/index.ts',
	output: {
		dir: '.',
		format: 'es',
		name: 'lib',
		chunkFileNames: 'lib/[name]-[hash].mjs',
		entryFileNames: 'lib/[name].mjs',
	},
	external: [
		/java:.+/,
	],
	plugins: [json(), terser(), typescript({declarationDir: 'types'})]
};