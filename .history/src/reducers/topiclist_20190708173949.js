const LIST_STATE={
    list:[],
    limit:20,
    page:1
}

export default function topiclist(prestate=LIST_STATE, action) {
    switch(action.type){
        case 'getTopicList':
            return {...LIST_STATE,list:action.list}
            case 'getTopicListNext':
            return {...LIST_STATE,list:LIST_STATE.liaction.list}
        default:
            return {...prestate}
    }
}