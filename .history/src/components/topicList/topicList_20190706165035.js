import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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
        let { page, limit, currentCata, onGetTopicList}  = this.props;
        console.log(page,limit,currentCata,this.props)
        onGetTopicList({page:page, limit:limit, tab:currentCata.key});
    }
    render(){
        return(<View>{this.props.currentCata.value}</View>)
    }
}

export default TopicList;