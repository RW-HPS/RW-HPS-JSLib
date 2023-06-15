import json from '@rollup/plugin-json'
import ts from 'rollup-plugin-ts'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'

export default {
	input: 'src/index.ts',
	output: {
		dir: 'lib',
		format: 'es',
		name: 'lib',
		chunkFileNames: '[name]-[hash].mjs',
		entryFileNames: '[name].mjs'
	},
	plugins: [json(), typescript()]
};