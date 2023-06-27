import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import node from '@rollup/plugin-node-resolve'
import nodeResolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias';

export default {
	input: 'src/index.ts',
	output: {
		dir: 'lib',
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
	]
};