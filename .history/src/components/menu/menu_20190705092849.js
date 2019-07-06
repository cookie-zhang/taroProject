import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './menu.less'
import menu from '../../assets/img/list.png'
import head from '../../assets/img/head.png'
import { showDrawer } from '../../actions/menu'
import { AtDrawer } from 'taro-ui'

@connect(function(store){
    return {...store.menu}
},function(dispatch){
    return{
        onShowMenu(){
            dispatch(showDrawer())
        }
    }
})
class Menu extends Component {
    //显示左边菜单
    showDrawer(){
        this.props.onShowMenu();
    }

    render(){
        return(
            <View className='topicsList-menu'>
                <Image onClick={this.showDrawer.bind(this)} className='img-menu' src={menu} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
                <AtDrawer />
            </View> 
        )
    }
}

export default Menu