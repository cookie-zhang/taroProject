import Taro from '@tarojs/taro';
import api  from '../constants/api'
export funtion getJSON(url, data){
    return Taro.request()
}
