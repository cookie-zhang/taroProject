 // eslint-disable-next-line import/prefer-default-export
import { getJSON, postJSON} from '../utils/request';
import api from '../constants/api';

export  function getTopicListActoin() {
  console.log(144)
return async (dispatch)=>{
let res = await getJSON(api.gettopics,parms);
//dispatch({data: data})
console.log(res.data)
// if(res&&res.data){
// console.log(res.data)
// }
}

}
export  function getTopicListActoin1() {
  
}