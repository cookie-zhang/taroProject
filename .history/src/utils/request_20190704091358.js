
import Taro from '@tarojs/taro';
import api  from '../constants/api';

export function getJSON(url, data){
    return Taro.request({
        url:url,
        data:data,
        header: {'Content-Type': 'application/json'},
        method:'GET',
    });
}
export  async function getTopicList(){
    await getJSON(api.gettopics).then(res).catch(mess=>{
        console.log('erro:'+mess)
    })
}