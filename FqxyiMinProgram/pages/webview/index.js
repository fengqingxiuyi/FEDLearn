//index.js

const app = getApp()

Page({
    data: {

    },
    onLoad: function (options) {
        const me = this;
        let url = options.url.replace('http://', 'https://');
        if (url) {
            me.setData({
                url: url
            })
        }
    },
})
