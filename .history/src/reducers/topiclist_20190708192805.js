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
                console.log('---')
                console.log(action)
                console.log(LIST_STATE.list)
                console.log(action.list)
            return {...prestate,list:prestate.list.concat(action.list),page:action.page}
        default:
            return {...prestate}
    }
}