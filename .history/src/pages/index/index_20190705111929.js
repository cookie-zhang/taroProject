import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {  AtCalendar,AtButton     } from 'taro-ui'
import './index.less'
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
        <View>
          日历
          <AtCalendar />
        
          <AtButton>按钮文案</AtButton>
          <AtButton type='primary'>按钮文案</AtButton>
          <AtButton type='secondary'>按钮文案</AtButton>
        </View>
      </View>
    )
  }
}

export default Index
