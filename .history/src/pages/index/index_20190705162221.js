import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDrawer  } from 'taro-ui'
import './index.less'
import Menu from '../../components/menu/menu'//Menu一定要和类名一样，是按照包名查找，不然找不到

class Index extends Component {
  state = {
    tabbarCurrent: 0,
    tabsListValue: 0,
    tabsListValue2: 0,
    segmentedValue: 0,
    leftDrawerShow: false,
  }
    config = {
    navigationBarTitleText: '首页'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  leftDrawerClick () {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
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
        <
        <AtDrawer show={this.state.leftDrawerShow} mask onClose={this.onDrawerClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>
      </View>
    )
  }
}

export default Index
