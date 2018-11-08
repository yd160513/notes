import { getToken, setToken, removeToken } from '@/util/auth'

const USER = {
  state: {
    user: '',
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    loginByUserName({ commit }, userInfo) {
      let username = userInfo.name.trim();
      return new Promise((resolve, reject) => {
        loginByUserName(username, userInfo.password)
          .then(response => {
            const data = response.data;
            setToken(response.data.token);
            commit('SET_TOKEN', data.token)
            resolve();
          })
          .catch(error => {
            reject(error);
          })
      });
      commit('SET_TOKEN', '1');
    }
  }
}

export default USER