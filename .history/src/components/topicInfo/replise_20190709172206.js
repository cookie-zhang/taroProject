import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Replise extends Component {

    render(){
        console.log(this.props)
        return(<View>{this.props.replies}</View>)
    }
}

export default Replise;