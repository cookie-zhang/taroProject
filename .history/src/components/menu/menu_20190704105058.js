import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './menu.less'
import menu from '../../assets/img/list.png'
import head from '../../assets/img/head.png'

@connect(function())
class Menu extends Component {

    render(){
        return(
            <View className='topicsList-menu'>
                <Image className='img-menu' src={menu} />
                <Text>全部</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu;