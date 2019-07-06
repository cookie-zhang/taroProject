const MENU_STATE ={
    cataData:[
        {id:'1',key:'all',value:'全部'},
        {id:'2',key:'good',value:'精华'},
        {id:'3',key:'share',value:'分享'},
        {id:'4',key:'ask',value:'问答'},
        {id:'5',key:'job',value:'招聘'},
        {id:'6',key:'dev',value:'客户端测试'}
    ],
    currentCata:{id:''key:'all',value:'全部'},
    showDrawerFlage:false //左菜单展示和隐藏
}

export default function menu( prestate=MENU_STATE, action ) {
    switch(action.type){
        //显示左边菜单
        case 'showDrawer':
            return {...MENU_STATE,showDrawerFlage:true}
        //隐藏左边菜单
        case 'hideDrawer':
            return {...MENU_STATE,showDrawerFlage:false}
        //改变标题分类    
        case 'changeCata':
            return {...MENU_STATE,currentCata:action.currentCata}
        default:
            return {...MENU_STATE}
    }
}