import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicInfoAction } from '../../actions/topiclist'
import TopicInfo from '../../components/topicInfo/toppicInfo'
import Replise from '../../components/topicInfo/replise'


@connect(function(store){
    return {info: store.topiclist.info, replies: store.topiclist.info}
},function(dispatch){
    return{
        onGetDteilInfo(params){
            dispatch(getTopicInfoAction(params))
        }
    }
})
class Deatil extends Component {
    componentWillMount(){
        let detailId = this.$router.params.id
        this.props.onGetDteilInfo(detailId)
    }
    render(){
        let { info,replies } = this.props
        return(
            <View>
                <TopicInfo info={info} />
                <Replise replies={replies}/>
            </View>
        )
    }
}

export default Deatil;