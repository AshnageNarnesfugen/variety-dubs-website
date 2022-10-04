/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.JQuery": 'jquery',
            })
        );
        return config;
    },
    i18n: {
        locales: ['es'],
        defaultLocale: 'es',
    }
};

module.exports = nextConfig