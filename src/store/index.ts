import { createStore } from 'vuex';
import user from './modules/user';
import permission from './modules/permission';
export const store = createStore({
  modules: {
    user,
    permission
  },
});

export default store;
