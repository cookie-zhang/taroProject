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