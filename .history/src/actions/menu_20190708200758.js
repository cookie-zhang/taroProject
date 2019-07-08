import { getTopicListActoin } from './topiclist'
//左边菜单显示抽屉
 // eslint-disable-next-line import/prefer-default-export
 export function showDrawerAction(){
     return dispatch =>{
        dispatch({type:'showDrawer'})
     }
 }
 export function hideDrawerAction(){
    return dispatch =>{
       dispatch({type:'hideDrawer'})
    }
}
export function changeItemAction(item){
   return dispatch =>{
      dispatch({type:'changeCata',currentCata:item})
      dispatch(getTopicListActoin({page:1, limit:20, tab:item}))
   }
}