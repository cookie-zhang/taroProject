import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {  AtCalendar,AtCard    } from 'taro-ui'
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
          <AtCard
            note='小Tips'
            extra='额外信息'
            title='这是个标题'
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          >
            这也是内容区 可以随意定义功能
          </AtCard>
        </View>
      </View>
    )
  }
}

export default Index
