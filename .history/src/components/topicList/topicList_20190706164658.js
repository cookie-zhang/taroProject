import Taro, { Component, startSoterAuthentication } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicListActoin } from '../../actions/topiclist'

@connect(function(store){
    return {...store.topiclist,currentCata:store.menu.currentCata}
},function(dispatch){
    return{
        onGetTopicList(parms){
            dispatch(getTopicListActoin(parms))
        }

    }
})
class TopicList extends Component {
    componentWillMount(){
        let { page, limit, currentCata}  = this.props;
        console.log(page,limit,cur)
        this.props.onGetTopicList({page:page, limit:limit, tab:currentCata.key});
    }
    render(){
        return(<View>{this.props.currentCata.value}</View>)
    }
}

export default TopicList;