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
    state={
        scrollY: true
    }
    componentWillMount(){
        let { page, limit, currentCata, onGetTopicList}  = this.props;
        onGetTopicList({page:page, limit:limit, tab:currentCata.key});
    }
    //
    onScrollToLower(){
        console.log(1)
    }
    render(){
        let { list } = this.props;
        return(<ScrollView className='' onScrollToLower={this.onScrollToLower.bind(this)} scrollY={this.state.scrollY}>
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
                                        {/** <Text>创建时间{item.create_at}</Text> 后期可完善 */}  
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