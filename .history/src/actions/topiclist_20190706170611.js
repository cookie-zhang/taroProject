 // eslint-disable-next-line import/prefer-default-export
import { getJSON, postJSON} from '../utils/request';
import api from '../constants/api';

export  function getTopicListActoin(parms) {
  console.log(144)
  return async (dispatch)=>{
  let res = await getJSON(api.gettopics,parms);
  if(res&&res.data){
    dispatch({type:'getTopicList',})
  }
  }

}
export  function getTopicListActoin1() {
  
}