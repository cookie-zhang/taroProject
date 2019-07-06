import Taro from '@tarojs/taro';
import api  from '../constants/api';

// eslint-disable-next-line import/prefer-default-export
export function getJSON(url, data){
    return Taro.request({url:url,data:data,method:'GET'})
}
