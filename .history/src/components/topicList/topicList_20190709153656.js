import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView,Image,Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicListActoin, getTopicListNextActoin } from '../../actions/topiclist'
import smart from '../../assets/img/learn.png'


@connect(function(store){
    return {...store.topiclist,currentCata:store.menu.currentCata}
},function(dispatch){
    return{
        onGetTopicList(parms){
            dispatch(getTopicListActoin(parms))
        },
        onGetTopicListNext(parms){
            dispatch(getTopicListNextActoin(parms))
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
        let { page, limit, currentCata, onGetTopicListNext}  = this.props;
        onGetTopicListNext({page: (page+1), limit: limit, tab: currentCata.key})
    }
    //跳转详情页
    handleGoDetail(id,e){
        Taro.navigateTo({url:'/page/detail/detail?'})
    }
    render(){
        let { list } = this.props;
        return(<ScrollView className='ScrollView' onScrollToLower={this.onScrollToLower.bind(this)} scrollY={this.state.scrollY}>
                {
                    list.map((item,index)=>{
                        return(
                            <View key={index} className='topicListContanier' onClick={this.handleGoDetail.bind(this,item.id)}>
                                <View className='imgContanier'>
                                    <Image className='topicImage' src={item.author.avatar_url?item.author.avatar_url:smart} />
                                </View>
                                <View className='topicRight'>
                                    <View className='topicRightTop'>
                                       {
                                        item.top?<Text className='top'>置顶</Text>:(item.tab=='share'?<Text className='top blue'>分享</Text>:<Text className='top blue'>问答</Text>)
                                       } 
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