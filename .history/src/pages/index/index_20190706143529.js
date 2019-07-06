import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import Menu from '../../components/menu/menu'//Menu一定要和类名一样，是按照包名查找，不然找不到

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps () {
  }

  componentWillUnmount () { }
  componentDidMount(){
  }
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Menu />
      </View>
    )
  }
}

export default Index
