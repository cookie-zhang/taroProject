
import Taro from '@tarojs/taro';
import api  from '../constants/api';


export function getJSON(url, data){
    return Taro.request({url:url,data:data,method:'GET'});
}
export  async function getTopicList(){
    // let result = await api.getJSON(api.gettopics).catch(mess=>{
    //     console.log('erro:'+mess)
    // })
    // console.log(result)
}