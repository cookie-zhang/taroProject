import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'
import './menu.less'
import menus from '../../assets/img/list.png'
import head from '../../assets/img/head.png'
import { showDrawerAction } from '../../actions/menu'


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
        let { showDrawer,cataData } = this.props;
        let items = this.getItems(cataData)
        return(
            <View className='topicsList-menu' >
                <AtDrawer style='position: absolute;'
                  show={showDrawer} 
                  left
                  mask 
                  onClose={this.onClose.bind(this)} 
                  items={items}
                />

                <AtDrawer
                   show={this.state.show}
                mask
                >
                <View className='drawer-item'>优先展示items里的数据</View>
                <View className='drawer-item'>如果items没有数据就会展示children</View>
                <View className='drawer-item'>这是自定义内容 <AtIcon value='home' size='20' /></View>
                <View className='drawer-item'>这是自定义内容</View>
                </AtDrawer>


                <Image onClick={this.handleShowDrawer.bind(this)} className='img-menu' src={menus} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu