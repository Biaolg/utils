//入口管理文件
const fileTree = require('./utils/file/fileTree')

fileTree('./src').then(res=>{

    console.log(res);
    res.openWorld()
})

