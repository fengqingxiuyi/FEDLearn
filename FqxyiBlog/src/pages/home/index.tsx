/**
 * 首页
 */

import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// 组件
import Blog from '@/constants/blog';
// 样式
import './index.scss'
// 页面渲染数据
type HomeStateItem = {
  title: string
  url: string
}
type HomeState = {
  data: Array<HomeStateItem>
}

class Home extends Component<{}, HomeState> {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    this.setState({
      data: Blog.data
    })
  }

  itemClick(value) {
    Taro.navigateTo({
      url: `/pages/webview/index?title=${value.title}&url=${value.url}`
    })
  }

  // 分享配置
  onShareAppMessage() {
    return {
      title: '风清袖一的博客',
      path: '/pages/home/index'
    }
  }

  render () {
    const { data } = this.state
    if (!data) return(null)
    return (
      <View className='home'>
        {
          data.map(v => {
            return(
              <View key={v.title} className='home_title' hoverClass='home_title_hover'
                onClick={this.itemClick.bind(this, v)}
              >{v.title}</View>
            )
          })
        }
      </View>
    )
  }
}

export default Home
