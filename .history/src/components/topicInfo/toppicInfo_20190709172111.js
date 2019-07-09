import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class TopicInfo extends Component {

    render(){
        return(<View>{this.props}</View>)
    }
}

export default TopicInfo;