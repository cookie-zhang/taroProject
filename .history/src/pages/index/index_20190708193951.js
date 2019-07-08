import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import Menu from '../../components/menu/menu.js'//Menu一定要和类名一样，是按照包名查找，不然找不到
import TopicList from '../../components/topicList/topicList'

class Index extends Component {

    config = {
    navigationBarTitleText: 'taro'
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
        <TopicList />
      </View>
    )
  }
}

export default Index
