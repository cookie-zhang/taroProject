import { getJSON, postJSON} from '../utils/request'
import api from '../constants/api'

export default function getTopicListActoin(parms){
    return async (dispatch)=>{
        getJSON(api.gettopics)
    }
}