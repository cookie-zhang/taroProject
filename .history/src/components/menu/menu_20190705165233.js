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
        let { showDrawerFlage,cataData } = this.props;
        let items = this.getItems(cataData)
        console.log(showDrawerFlage,)
        return(
            <View className='topicsList-menu' >
            <View>
                <Image onClick={this.handleShowDrawer.bind(this)} className='img-menu' src={menus} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View>
            <AtDrawer 
            style='position: fixed;' 
            show={showDrawerFlage} 
            items={items} 
          />
               
            </View> 
        )
    }
}

export default Menu