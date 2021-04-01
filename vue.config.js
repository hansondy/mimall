module.exports={
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        // pathRewrite:{
        //   '/api':''
        // }
      }
    }
  },
}