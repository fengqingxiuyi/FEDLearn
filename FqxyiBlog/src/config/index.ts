/**
 * 项目配置文件
 */
import { isProd } from '@/common/index'

const baseConfig = {

}

const devConfig = {
  apiURL: '测试ApiUrl', // API
  appid: '测试AppID', // AppID
  secret: '测试AppSecret', // AppSecret
}

const prodConfig = {
  apiURL: '正式ApiUrl', // API
  appid: '正式AppID', // AppID
  secret: '正式AppSecret', // AppSecret
}

export default (isProd
  ? { ...baseConfig, ...prodConfig }
  : { ...baseConfig, ...devConfig })


