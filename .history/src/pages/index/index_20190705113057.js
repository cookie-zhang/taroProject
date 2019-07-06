import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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

  componentWillUnmount () { }
  componentDidMount(){
  }
  componentDidShow () { }

  componentDidHide () { }
  handlea(){
    this.setState({
      aa: true
    })
  }
  render () {
    let { aa } = this.state;
    console.log(1)
    return (
      <View className='index'>
        <Menu />
        <View onClick={this.handlea().bind(this)}>aa</View>
        <AtDrawer
          show={aa} 
          left
          mask 
          items={['1','2']}
        />
      </View>
    )
  }
}

export default Index
