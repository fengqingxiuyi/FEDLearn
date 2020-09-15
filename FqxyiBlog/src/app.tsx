import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import { isWeapp, isDevtools, isProd } from '@/common/index';
import commonStore from '@/store/common'

import Index from './pages/home/index'

import './app.scss'

const store = {
  commonStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/user/index',
      'pages/webview/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro Test',
      navigationBarTextStyle: 'black',
      backgroundColor: '#f6f6f6'
    },
    tabBar: {
      color: '#777',
      selectedColor: '#ff0d4c',
      borderStyle: 'black',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: 'pages/home/index',
          iconPath:
                      'assets/images/tabbar/mmhtab_icon_shouye_n@2x.png',
          selectedIconPath:
                      'assets/images/tabbar/mmhtab_icon_shouye_s@2x.png',
          text: '首页',
        },
        {
          pagePath: 'pages/user/index',
          iconPath: 'assets/images/tabbar/mmhtab_icon_me_n@2x.png',
          selectedIconPath:
                      'assets/images/tabbar/mmhtab_icon_me_s@2x.png',
          text: '我',
        },
      ],
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示',
      },
    }
  }

  componentDidMount () {}

  componentDidShow () {
    if (isWeapp && !isDevtools) {
      Taro.setEnableDebug({
        enableDebug: !isProd,
      })
    }
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
