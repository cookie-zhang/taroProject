const rootPath =' https://cnodejs.org/api/v1'; // 域名 定义不会变的变量  
const apiObject={
    gettopics:rootPath+'/topics ',//获取话题列表
    gettopicinfo:rootPath+'/topics ',//获取话题详情
    :rootPath+'/topics ',//验证用户token
    :rootPath+'/topics ',//获取用户信息
    getuserinfo:rootPath+'/topics ',//新建话题
    createtopic:rootPath+'/topics ',//恢复话题信息
    topics:rootPath+'/topics ',//点赞、取消点赞
}
export default apiObject;