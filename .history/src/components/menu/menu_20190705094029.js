import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'
import './menu.less'
import menu from '../../assets/img/list.png'
import head from '../../assets/img/head.png'
import { showDrawer } from '../../actions/menu'


@connect(function(store){
    console.log('--'+store)
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
    handleShowDrawer(){
        this.props.onShowMenu();
        console.log(this.props)
    }
    onClose(){
        
    }

    render(){
        let { showDrawer } = this.props;
        return(
            <View className='topicsList-menu'>
                <AtDrawer style='position: absolute;'
                  show={showDrawer} 
                  right 
                  mask 
                  onClose={this.onClose.bind(this)} 
                  items={['菜单1', '菜单2']}
                >
                </AtDrawer>
                <Image onClick={this.handleShowDrawer.bind(this)} className='img-menu' src={menu} />
                <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
                <Image className='img-head' src={head} />
            </View> 
        )
    }
}

export default Menu