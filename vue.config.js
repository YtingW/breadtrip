module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://api.breadtrip.com',
                changeOrigin:true,
                pathRewrite:{"^/api":""}
            },
            // '/destination':{
            //     target:'http://api.breadtrip.com',
            //     changeOrigin:true
            // },
            // '/trips':{
            //     target:'http://api.breadtrip.com',
            //     changeOrigin:true
            // }
        }
    }
}