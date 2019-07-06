/* eslint-disable import/prefer-default-export */
import Taro from '@tarojs/taro';
import api  from '../constants/api';


export function getJSON(url, data){
    return Taro.request({url:url,data:data,method:'GET'})
}
