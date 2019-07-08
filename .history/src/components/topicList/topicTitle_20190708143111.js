import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

class TopicTitle extends Component {

    render(){
        console.log(this.props)
        return(<View>{this.props}</View>)
    }
}

export default TopicTitle;