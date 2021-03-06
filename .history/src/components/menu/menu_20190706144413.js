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
        },
        onClose(){
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
        this.props.onClose();
    }
    onClose(){
        
    }
    getItems(cataData){
        return cataData.map(item=>item.value)
    }
    handleMenuItem(e){
        console.log(e.stopPropagation())
    }
    render(){
        let { showDrawerFlage,cataData } = this.props;
        let items = this.getItems(cataData)
        return(
            <View className='topicsList-menu' >
                <View className={showDrawerFlage?'leftDrawerContanierActive':'leftDrawerContanier'}> 
                    <View className='leftMenu'>
                        {
                            items.map((item,index)=>{
                                return(
                                    <View onClick={this.handleMenuItem.bind(this)} className='menuItem' key={index}>
                                        {item}<Text className='rightSytem'> &gt; </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View onClick={this.handleClose.bind(this)} className='rightMenuOver'></View>
                </View>
                <Image onClick={this.handleShowDrawer.bind(this)} className='img-menu' src={menus} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu