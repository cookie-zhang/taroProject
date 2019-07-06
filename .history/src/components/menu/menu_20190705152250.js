import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './menu.less'
import menus from '../../assets/img/list.png'
import head from '../../assets/img/head.png'
import { showDrawerAction } from '../../actions/menu'

import * as all from 'taro-ui'

console.log(all)

@connect(function(store){
    return {...store.menu}
},function(dispatch){
    return{
        onShowMenu(){
            dispatch(showDrawerAction())
        }
    }
})
class Menu extends Component {
    //显示左边菜单
    handleShowDrawer(){
        this.props.onShowMenu();
    }
    onClose(){
        
    }
    getItems(cataData){
        return cataData.map(item=>item.value)
    }
    render(){
        let { showDrawerFlage,cataData } = this.props;
        let items = this.getItems(cataData)
        console.log(showDrawerFlage,items)
        return(
            <View className='topicsList-menu' >
                <AtDrawer 
                  style='position: absolute;' 
                  show={showDrawerFlage} 
                  items={['菜单一']} 
                />
                <Image onClick={this.handleShowDrawer.bind(this)} className='img-menu' src={menus} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu