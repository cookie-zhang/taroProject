import { getJSON, postJSON} from '../utils/request'
import api from '../constants/api'

export default function getTopicListActoin(parms){
    return async (dispatch)=>{
      let data = await getJSON(api.gettopics,parms);
      dispatch(data:data)
    }
}