const MENU_STATE ={
    cataData:[
        {key:'all',value:'全部'},
        {key:'good',value:'精华'},
        {key:'share',value:'分享'},
        {key:'ask',value:'问答'},
        {key:'job',value:'招聘'},
        {key:'dev',value:'客户端测试'}
    ],
    currentCata:{key:'all',value:'全部'},
    showDrawerF:false //左菜单展示和隐藏
}

export default function menu( prestate=MENU_STATE, action ) {
    switch(action.type){
        //显示左边菜单
        case 'showDrawer':
            return {...MENU_STATE,showDrawer:true}
        //隐藏左边菜单
        case 'hideDrawer':
            return {...MENU_STATE,showDrawer:false}
        //改变标题分类    
        case 'changeCata':
            return {...MENU_STATE,currentCata:action.currentCata}
        default:
            return {...MENU_STATE}
    }
}