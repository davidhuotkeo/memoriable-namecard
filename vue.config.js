  module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Dave Namecard',
        short_name: 'ave Namecard',
        themeColor: '#942F37',
        msTileColor: '#942F37',
        backgroundColor: '#942F37',
        manifestOptions: {
            icons: [
                {
                    src: "img/icons/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "img/icons/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        }
    }
}