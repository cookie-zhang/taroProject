import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicInfoAction } from '../../actions/topiclist'

@connect(function(staore){
    return {...staore.}
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
        console.log(this.props)
        return(
            <View>
            
            </View>
        )
    }
}

export default Deatil;