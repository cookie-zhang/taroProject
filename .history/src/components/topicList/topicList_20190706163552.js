import Taro, { Component, startSoterAuthentication } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicListActoin } from '../../actions/topiclist'

@connect(function(store){
    return {...store.topiclist,currentCata:store.menu.currentCata}
},function(dispatch){
    return{
        ongetTopicList(){
            dispatch(getTopicListActoin())
        }

    }
})
class TopicList extends Component {
    componentWillMount(){
        this.props.ongetTopicList
    }
    render(){
        return(<View>{this.props.currentCata.value}</View>)
    }
}

export default TopicList;