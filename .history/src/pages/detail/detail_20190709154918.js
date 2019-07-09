import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Deatil extends Component {
    state={
        id: null
    }
    componentWillMount(){
        let detailId = this.$router.params.id 
        this.setState({
            id: detailId
        })
        console.log(this.state)
    }
    render(){
        return(
            <View>
            
            </View>
        )
    }
}

export default Deatil;