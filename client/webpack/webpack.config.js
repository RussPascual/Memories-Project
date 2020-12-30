module.exports = {
    entry: "./src/scripts/app.js",//path relative to this file
    output: {
        filename: "./dist/app.bundle.js"//path relative to this file
    },
    alias: {
        react: path.resolve('./node_modules/react')
    }
}