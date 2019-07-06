import { getJSON, postJSON} from '../utils/request'
import api from '../constants/api'

export default function getTopicListActoin(parms){
    return async (dispatch)=>{
      let res = await getJSON(api.gettopics,parms);
      dispatch({data: data})
      if(res&&res.data){
            
      }
     
    }
}