//index.js

const app = getApp()

Page({
    data: {

    },
    onLoad() {

    },
    click1(e) {
        const openUrl = e.currentTarget.dataset.openurl;
        const url = `/pages/webview/index?url=${openUrl}`;
        wx.navigateTo({ url: url })
    },
    click2(e) {
        const openUrl = e.currentTarget.dataset.openurl;
        const url = `/pages/webview/index?url=${openUrl}`;
        wx.navigateTo({ url: url })
    },
    click3(e) {
        const openUrl = e.currentTarget.dataset.openurl;
        const url = `/pages/webview/index?url=${openUrl}`;
        wx.navigateTo({ url: url })
    },
    click4(e) {
        const openUrl = e.currentTarget.dataset.openurl;
        const url = `/pages/webview/index?url=${openUrl}`;
        wx.navigateTo({ url: url })
    }
})
