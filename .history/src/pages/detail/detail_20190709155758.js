import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

@connect(funtion(staore){

},function(){
    
}
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