import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './menu.less'
import menu from '../../assets/img/list.png'
import head from '../../assets/img/head.png'


@connect(function(store){
    return {...store.menu}
},function(dispatch){
    return { }
})

class Menu extends Component {
    render(){
        return(
            <View className='topicsList-menu'>
                <Image className='img-menu' src={menu} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu