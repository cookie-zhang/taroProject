import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

@connect()
class TopicList extends Component {

    render(){
        return(<View>TopicList</View>)
    }
}

export default TopicList;