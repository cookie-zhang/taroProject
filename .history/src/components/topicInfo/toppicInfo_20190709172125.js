import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class TopicInfo extends Component {
    console.log(this.props)
    render(){
        return(<View>{this.props.info}</View>)
    }
}

export default TopicInfo;