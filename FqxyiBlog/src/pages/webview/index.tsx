/**
 * Webview
 */

import Taro, { Component, Config } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
// 组件
import Url from '@/constants/url';
// 样式
import './index.scss'
// 页面渲染数据
type WebviewState = {
  url: string
}

class Webview extends Component<{}, WebviewState> {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  config: Config = {
    navigationBarTitleText: ''
  }

  componentWillMount() {
    const params = this.$router.params
    console.log('Webview 接收的参数 => ', params)
    // 设置标题
    Taro.setNavigationBarTitle({
      title: params.title
    })
    // 渲染Url
    this.setState({
      url: params.url ? params.url : Url.FourZeroFour
    })
  }

  render () {
    const { url } = this.state
    if (!url) return(null)
    return (
      <View className='webview'>
        <WebView src={`${url}#wechat_redirect`} />
      </View>
    )
  }
}

export default Webview
