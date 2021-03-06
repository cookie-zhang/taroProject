 // eslint-disable-next-line import/prefer-default-export
import { getJSON, postJSON} from '../utils/request';
import api from '../constants/api';

export  function getTopicListActoin(parms) {
  return async (dispatch)=>{
    let res = await getJSON(api.gettopics,parms);
    if(res&&res.data){
      dispatch({type:'getTopicList',list:res.data.data})
    }
  }

}
export  function getTopicListNextActoin(parms) {
  console.log(parms)
  return async (dispatch)=>{
    let res = await getJSON(api.gettopics,parms)
    console.log('++')
    console.log(parms)
    if(res&&res.data){
      dispatch({type:'getTopicListNext',list:res.data.data,page:parms.page,limit:parms.limit+20})
    }
  }
  
}