/**
  Loading组件

  首先页面加载组件 <Loading/>

  用法1:
    Request.post({url:'xxx', showLoading:true})
    loading会在请求成功或catch异常时结束
    适用于网络请求

  用法2:
    手动挡 <Loading show={true}/>
    适用于非网络请求下的加载loading

  2优先级高于1
 */

import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'
import CommonStore from '@/store/common'
import './index.scss'

type Props = {
  show?: boolean
  commonStore?: typeof CommonStore
}

@inject('commonStore')
@observer
class Loading extends Component<Props, {}> {
  render() {
    const {commonStore, show} = this.props
    let showLoading
    if (show !== null) {
      showLoading = show
    }else{
      showLoading = commonStore && commonStore.loading
    }
    return (
      showLoading ? (
        <View className='loading'>
          <View className='loading_img'>
            <View className='loading_inner loading_inner_one'> </View>
            <View className='loading_inner loading_inner_two'> </View>
            <View className='loading_inner loading_inner_three'> </View>
          </View>
        </View>) : ''
    )
  }
}

export default Loading
