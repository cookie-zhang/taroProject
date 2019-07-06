import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDrawer  } from 'taro-ui'
import './index.less'
import Menu from '../../components/menu/menu'//Menu一定要和类名一样，是按照包名查找，不然找不到

class Index extends Component {
  state = {
    leftDrawerShow: false,
  }
    config = {
    navigationBarTitleText: '首页'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  leftDrawerClick () {
    console.log(1)
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }
  onDrawerClose () {
   
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
      
        <View onClick={this.leftDrawerClick.bind(this)}>aaaaaaaaaaaaaa</View>
        <View className='panel'>
            <View className='panel__title'>Drawer 抽屉</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtDrawer show={this.state.leftDrawerShow} mask onClose={this.onDrawerClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>
              </View>
            </View>
          </View>
      </View>
    )
  }
}

export default Index
