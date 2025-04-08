const base = {
    get() {
        return {
            url : "http://localhost:8080/yiqingguanli/",
            name: "yiqingguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiqingguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情管理系统"
        } 
    }
}
export default base
