import Taro from '@tarojs/taro'

const sysInfo = Taro.getSystemInfoSync()

// 判断宿主类型，从上往下分别是：小程序、H5、微信里面的H5、浏览器里面的H5
export const isWeapp: boolean = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
export const isH5: boolean = Taro.getEnv() === Taro.ENV_TYPE.WEB
export const isH5InWechat: boolean = !isWeapp && /MicroMessenger/gi.test(navigator.userAgent)
export const isH5InBrowser: boolean = !isWeapp && !isH5InWechat

// 判断环境类型，从上往下分别是：开发环境、生产环境
export const isDev: boolean = process.env.NODE_ENV === 'development'
export const isProd: boolean = process.env.NODE_ENV === 'production'

// 判断设备类型，从上往下分别是：开发工具、Android、iOS
export const isDevtools: boolean = sysInfo.platform === 'devtools'
export const isAndroid: boolean = sysInfo.platform === 'android'
export const isIOS: boolean = sysInfo.platform === 'ios'
