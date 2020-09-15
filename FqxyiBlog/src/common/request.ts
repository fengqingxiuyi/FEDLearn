import Taro, {request} from '@tarojs/taro'
import {isWeapp, isDevtools, isProd} from '@/common/index'
import config from '@/config/index'
import commonStore from '@/store/common'

const store = commonStore

type reqParams = request.Param & { showLoading?: boolean }

enum ErrorType {
  NetError, // 网络错误
  ServerError, // 服务错误
}

export class ErrorException {
  type: ErrorType
  error_code: number
  error: string
}

enum Method {
  Get = 'GET',
  Post = 'POST',
}

export default class Request {

  /**
   * GET请求
   * @param params {reqParams} 请求参数
   */
  static get(params: reqParams): Promise<any> {
    params.method = Method.Get
    return this.fetch(params)
  }

  /**
   * POST请求
   * @param params 请求参数
   */
  static post(params: reqParams): Promise<any> {
    params.method = Method.Post
    return this.fetch(params)
  }

  /**
   * 获取
   * @param params 请求参数
   */
  private static fetch(params: reqParams): Promise<any> {
    const me = this
    const {header, url, data, showLoading} = params
    // 配置URL
    params.url = this.getUrl(url)
    // 附加data
    params.data = this.appendData(data)
    // 附加header
    params.header = this.appendHeader(header)
    // 请求时间标记
    const loadingTime = Date.now()
    // request
    return new Promise((resolve, reject) => {
      const urlName = this.getUrlName(url)
      me.log(`[${urlName}]请求发起 => `, params)
      showLoading && store.showLoading(loadingTime)
      Taro.request(params)
        .then(res => {
          me.log(`[${urlName}]请求成功 => `, res)
          const {results, error} = res.data
          showLoading && store.hideLoading(loadingTime)
          !error
            ? resolve(results)
            : reject({...this.getErrorObj(ErrorType.ServerError, error)})
        })
        .catch(err => {
          console.error(`[${urlName}]请求错误 => `, err)
          showLoading && store.hideLoading(loadingTime)
          reject({...this.getErrorObj(ErrorType.NetError, err)})
        })
    })
  }

  /**
   * 获取完整的URL
   * @param url 参数里的url
   */
  private static getUrl(url: string): string {
    return url.startsWith('http')
      ? url
      : `${config.apiURL}${url}`
  }

  private static appendData(originData: any): Promise<any> {
    let paramsData = originData
    if (originData) {
      if (typeof originData !== 'object') {
        throw new Error('data必须是object')
      }
    } else {
      paramsData = {}
    }
    // 加时间戳
    paramsData.ts = Date.now()

    return paramsData
  }

  private static appendHeader(originHeader: any): any {
    // UA
    let paramsHeader = originHeader
    if (!paramsHeader) {
      paramsHeader = {}
    }
    paramsHeader['UA-Info'] = 'm.mamahao.com, WeApp request v1.0.0, MamHao V5.5.9 20190523'
    // Content-Type
    paramsHeader['Content-Type'] = 'application/json; charset=utf-8'
    return paramsHeader
  }

  /**
   * 获取url简称
   */
  private static getUrlName(url: string) {
    let urlName = url
    if (url && url.lastIndexOf('/') !== -1 && url.lastIndexOf('.') !== -1) {
      urlName = url.substring(
        url.lastIndexOf('/') + 1,
        url.lastIndexOf('.')
      )
    }
    return urlName
  }

  /**
   * 小程序 真机 非生产环境 才打印该日志
   */
  private static log(message?: any, ...optionalParams: any[]) {
    if (isWeapp && !isDevtools && !isProd) {
      console.log(message, optionalParams)
    }
  }

  private static getErrorObj(errorType, error) {
    let errorObj
    if (errorType === ErrorType.NetError) {
      errorObj = {
        type: errorType,
        error_code: error.code,
        error: error.msg || '网络错误'
      }
    } else {
      try {
        errorObj = JSON.parse(error)
      } catch (e) {
        errorObj = {
          type: errorType,
          error_code: -1,
          error: '未知错误'
        }
      }
    }
    return errorObj
  }
}
