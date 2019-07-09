 // eslint-disable-next-line import/prefer-default-export
import { getJSON, postJSON} from '../utils/request';
import api from '../constants/api';

// postJSON
export  function getTopicListActoin(parms) {
  return async (dispatch)=>{
    let res = await getJSON(api.gettopics,parms);
    console.log(parms)
    if(res&&res.data){
      dispatch({type:'getTopicList',list:res.data.data,page:1,})
    }
  }
}
export  function getTopicListNextActoin(parms) {
  console.log(parms)
  return async (dispatch)=>{
    let res = await getJSON(api.gettopics,parms)
    if(res&&res.data){
      if(res.data.data.length>0){
        dispatch({type:'getTopicListNext',list:res.data.data,page:parms.page})
      }
    }
  }
  
}