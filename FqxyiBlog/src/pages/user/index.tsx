/**
 * 个人中心
 */

import Taro, { Component, Config } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
// 组件
import Url from '@/constants/url';
// 样式
import './index.scss'
// 页面渲染数据
type UserState = {
  url: string
}

class User extends Component<{}, UserState> {
  constructor(props) {
    super(props)
    this.state = {
      url: Url.BLOG
    }
  }

  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    const { url } = this.state
    if (!url) return(null)
    return (
      <View className='user'>
        <WebView src={`${url}#wechat_redirect`} />
      </View>
    )
  }
}

export default User
