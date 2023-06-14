import json from '@rollup/plugin-json'
import ts from 'rollup-plugin-ts'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'

export default {
	input: 'src/index.ts',
	output: {
		file: 'lib/index.js',
		format: 'iife',
		name: 'lib'
	},
	plugins: [json(), typescript()]
};