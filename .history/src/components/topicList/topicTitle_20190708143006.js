import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

class TopicTitle extends Component {

    render(){
        console.log(this.props.name)
        return(<View>{this.props.name}</View>)
    }
}

export default TopicTitle;