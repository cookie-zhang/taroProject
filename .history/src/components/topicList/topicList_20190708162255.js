import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView,Image,Text } from '@tarojs/components'
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
        onGetTopicList({page:page, limit:limit, tab:currentCata.key});
    }
    render(){
        let { list } = this.props;
        return(<ScrollView>
                {
                    list.map((item,index)=>{
                        return(
                            <View key={index} className='topicListContanier'>
                                <View className='imgContanier'>
                                    <Image className='topicImage' src={item.author.avatar_url} />
                                </View>
                                <View className='topicRight'>
                                    <View className='topicRightTop'>
                                        <Text className='top'>置顶</Text>
                                        <Text className='topTitle'>{item.title}</Text>
                                    </View>
                                    <View className='topicRightBot'>
                                        <Text>{item.author.loginname}</Text>
                                        <Text>{item.reply_count+'/'+item.visit_count}</Text>
                                        {/** */}
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
            )
    }
}

export default TopicList;