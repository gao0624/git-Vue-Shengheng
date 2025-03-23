// module.exports={
// 	lintOnSave:false
// }

// vue.config.js  为了跨域的问题 前端页面是8080  后端是9099访问接口   不同接口之间不能访问
module.exports = {
	lintOnSave:false,
	devServer: {
	  proxy: {
		'/api': {
		  target: 'http://localhost:9099/api/', // 必须与后端地址一致
		  changeOrigin: true,
		  pathRewrite: {
			'^/api': '', // 将 /api 替换为空字符串，最终请求路径为 http://localhost:9099/login
		  },
		},
	  },
	},
};