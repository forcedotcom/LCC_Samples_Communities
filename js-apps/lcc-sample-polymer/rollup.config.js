import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-dev-server'

export default {
    input: 'src/messager.js',
    output: {
        file: '../../force-app/main/default/staticresources/lcc_sample_polymer/js/bundle.js',
        format: 'iife',
        sourcemap: true
    },
	plugins: [
		nodeResolve({
			jsnext: true
		}),
        commonjs(),
        serve({
            // Launch in browser
            open: true,
           
            // Folder to serve files from
            contentBase: '../../force-app/main/default/staticresources/lcc_sample_polymer',

            // Allow cors request
            allowCrossOrigin: true,
        })
	]
}