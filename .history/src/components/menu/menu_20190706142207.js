import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
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
    handleShowDrawer(index,e){
        console.log(index)
        this.props.onShowMenu();
    }
    handleClose(e){
        e.stopPropagation
        this.props.onClose();
    }
    onClose(){
        
    }
    getItems(cataData){
        return cataData.map(item=>item.value)
    }
    handleMenuItem(index){
        console.log(index)
    }
    render(){
        let { showDrawerFlage,cataData } = this.props;
        let items = this.getItems(cataData)
        return(
            <View className='topicsList-menu' >
                <View className={showDrawerFlage?'leftDrawerContanierActive':'leftDrawerContanier'} onClick={this.handleClose.bind(this)}>
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
                </View>
                <Image onClick={this.handleShowDrawer.bind(this,1)} className='img-menu' src={menus} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu