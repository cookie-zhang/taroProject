import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'
import './menu.less'
import menus from '../../assets/img/list.png'
import head from '../../assets/img/head.png'
import { showDrawerAction, hideDrawerAction } from '../../actions/menu'


@connect(function(store){
    return {...store.menu}
},function(dispatch){
    return{
        onShowMenu(){
            dispatch(showDrawerAction())
        }
        handleClose(){
            dispatch(hideDrawerAction())
        }
    }
})
class Menu extends Component {
    //显示左边菜单
    handleShowDrawer(){
        this.props.onShowMenu();
    }
    handleClose(){
        console.log(1)
    }
    onClose(){
        
    }
    getItems(cataData){
        return cataData.map(item=>item.value)
    }
    render(){
        // let { showDrawerFlage,cataData } = this.props;
        // let items = this.getItems(cataData)
        /** 
            <AtDrawer 
                style='position: absolute;' 
                show={showDrawerFlage} 
                mask
                items={items} 
            />
        */
        
        return(
            <View className='topicsList-menu' >
                <View className='leftDrawerContanier'>
                    <View className='leftMenu'>
                        left菜单
                    </View>
                    <View onClick={this.handleClose.bind(this)} className='rightMenuOver'>
                        右边点击消失
                    </View>
                </View>
                
                <Image onClick={this.handleShowDrawer.bind(this)} className='img-menu' src={menus} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu