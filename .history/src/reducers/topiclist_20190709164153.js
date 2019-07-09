const LIST_STATE={
    list:[],
    limit:20,
    page:1,
    info:{},
    replies:[]
    
}

export default function topiclist(prestate=LIST_STATE, action) {
    switch(action.type){
        case 'getTopicDetail':
            return {...prestate,replies:action.infoData.replies,info:{...}}
        case 'getTopicList':
            return {...prestate,list:action.list,page:action.page,tab: action.tab}
            case 'getTopicListNext':
            return {...prestate,list:prestate.list.concat(action.list),page:action.page}
        default:
            return {...prestate}
    }
}