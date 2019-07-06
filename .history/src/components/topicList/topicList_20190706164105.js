import Taro, { Component, startSoterAuthentication } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicListActoin } from '../../actions/topiclist'

@connect(function(store){
    return {...store.topiclist,currentCata:store.menu.currentCata}
},function(dispatch){
    return{
        onGetTopicList(value){
            dispatch(getTopicListActoin(value))
        }

    }
})
class TopicList extends Component {
    componentWillMount(){
        let 
        this.props.onGetTopicList(this.props.currentCata.value);
    }
    render(){
        return(<View>{this.props.currentCata.value}</View>)
    }
}

export default TopicList;