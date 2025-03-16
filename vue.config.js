// module.exports={
// 	lintOnSave:false
// }

// vue.config.js
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