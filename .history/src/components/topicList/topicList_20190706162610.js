import Taro, { Component, startSoterAuthentication } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

@connect(function(store){
    return {...store.topiclist,currentCata:store.menu.currentCata}
},function(dispatch){
    return{
        

    }
})
class TopicList extends Component {
    render(){
        return(<View>{this.props.currentCata.value}</View>)
    }
}

export default TopicList;