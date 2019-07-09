import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {  } from '../../'

@connect(function(staore){
    return {...staore}
},function(dispatch){
    return{


    }
})
class Deatil extends Component {

    componentWillMount(){
        let detailId = this.$router.params.id 

    }
    render(){
        return(
            <View>
            
            </View>
        )
    }
}

export default Deatil;