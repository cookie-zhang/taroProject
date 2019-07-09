import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Replise extends Component {

    render(){
        console.log(this.props)
        return(<View>Replise</View>)
    }
}

export default Replise;