import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import { AtDrawer,AtCalendar } from 'taro-ui'
import Menu from '../../components/menu/menu'//Menu一定要和类名一样，是按照包名查找，不然找不到

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
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
        <AtCalendar></AtCalendar>
      </View>
    )
  }
}

export default Index
