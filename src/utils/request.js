
import Taro from '@tarojs/taro';

export function getJSON(url, data){
    return Taro.request({
        url:url,
        data:data,
        header: {'Content-Type': 'application/json'},
        method:'GET',
    });
}

export function postJSON(url, data){
    return Taro.request({
        url:url,
        data:data,
        header: {'Content-Type': 'application/json'},
        method:'POST',
    });
}
