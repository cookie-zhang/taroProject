 // eslint-disable-next-line import/prefer-default-export
import { getJSON, postJSON} from '../utils/request';
import api from '../constants/api';


export  function getTopicListActoin(parms) {
  return async (dispatch)=>{
    let res = await getJSON(api.gettopics,parms);
    if(res&&res.data){
      dispatch({type:'getTopicList',list:res.data.data, page:1, tab:parms.tab})
    }
  }
}
export  function getTopicListNextActoin(parms) {
  return async (dispatch)=>{
    let res = await getJSON(api.gettopics,parms)
    if(res&&res.data){
      if(res.data.data.length>0){
        dispatch({type:'getTopicListNext',list:res.data.data,page:parms.page})
      }
    }
  }
  
}
//获取详情
export  function getTopicInfo(parms) {
  return async dispatch=>{
  let res = await getJSON(api.gettopicinfo+parms.id)
  console.log(res)
  }
}