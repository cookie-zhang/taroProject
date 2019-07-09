import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Deatil extends Component {
    state={
        id: null
    }
    componentWillMount(){
        this.setState({
            id: this.$router.params.id
        })
        console.log(this.$router.params.id)
    }
    render(){
        return(
            <View>
            
            </View>
        )
    }
}

export default Deatil;