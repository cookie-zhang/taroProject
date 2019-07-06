import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import "~taro-ui/dist/style/components/drawer.scss";
import "~taro-ui/dist/style/components/list.scss";
import { AtDrawer } from 'taro-ui'
import './index.less'
import Menu from '../../components/menu/menu'//Menu一定要和类名一样，是按照包名查找，不然找不到

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  state={
    aa:true
  }
  componentWillUnmount () { }
  componentDidMount(){
  }
  componentDidShow () { }

  componentDidHide () { }
  handle(){
    this.setState({
      aa: true
    })
  }
  render () {
    let { aa } = this.state;
    console.log(aa)
    return (
      <View className='index'>
        <Menu />
        <View onClick={this.handle.bind(this)}>aa</View>
        <AtDrawer 
          show={aa} 
          mask 
          width
          onClose={this.onClose.bind(this)} 
          items={['菜单1', '菜单2']}
        ></AtDrawer>
      </View>
    )
  }
}

export default Index
