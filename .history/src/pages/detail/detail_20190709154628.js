import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Deatil extends Component {
    componentWillMount(){
        console.log(this.$router)
    }
    render(){
        return(
            <View>
            
            </View>
        )
    }
}

export default Deatil;