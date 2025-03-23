import storageService from '@/service/storageService';
import userService from '@/service/userService';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null, //eslint-disable-line
  },

  mutations: {
    SET_TOKEN(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      // 更新state
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
      // 更新state
      state.userInfo = userInfo;
    },
  },

  actions: {
    register(context, { name, telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.register({ name, telephone, password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.info();
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    login(context, { telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.login({ telephone, password }).then((res) => {
          console.log(res);
          if(res.data.data != null) {
            context.commit('SET_TOKEN', res.data.data.token); 
            return res
          }else{
            reject(new Error(res.data));
            return;
          }
          /**
           * Token和用户信息需要使用不同的方式进行处理，info是用户的名称，用户的头像等等信息 下面直接进行传递不在访问接口
           *  return res; ==> return userService.info();
           *  需要把userInfo封装成一个对象方便预定页面去使用
           */
        }).then((res) => {
          if(res.data.data != null){context.commit('SET_USERINFO', res.data.data);};
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    logout(context) {
      // 清除token
      context.commit('SET_TOKEN', '');
      storageService.set(storageService.USER_TOKEN, '');
      // 清除用户信息
      context.commit('SET_USERINFO', '');
      storageService.set(storageService.USER_INFO, '');
      window.location.reload();
    },
  },
};
export default userModule;
