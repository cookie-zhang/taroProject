const LIST_STATE={
    list:[],
    limit:20,
    page:1
}

export default function topiclist(prestate=LIST_STATE, action) {
    switch(action.type){
        case 'getTopicList':
            return {}
        default:
            return {...prestate}
    }
}