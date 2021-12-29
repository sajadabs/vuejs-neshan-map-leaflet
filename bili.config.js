module.exports = {
    banner: true,
    input: 'index.js',
    output: {
        extractCSS: true,
        moduleName: 'neshan-map-leaflet',
        format: [
            'cjs',
            'es',
            'umd',
            'umd-min',
        ],
    },
    plugins: {
        vue: {
            css: true
        },
        babel: false,

    },

}
