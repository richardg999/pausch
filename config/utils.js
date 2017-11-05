const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.loadImages = ({ include, exclude, options} = {}) => ({
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif|ico)$/,
            include,
            exclude,
            use: {
                loader: 'url-loader',
                options,
            }},
        ],
    },
});

exports.extractHTML = ({minify, isDev, host, port }) => {
    const plugin = {
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app',
        mobile: true,
        meta: [{
            name: 'description',
            content: 'A better default template for html-webpack-plugin.',
        }],
        favicon: './src/favicon.ico',
        title: 'Pausch Bridge UI',
    };

    const devServer = isDev ? {devServer: `http://${host}:${port}`} : {};
    return {plugins: [new HtmlWebpackPlugin(merge([plugin, devServer, {minify}]))]};
};
