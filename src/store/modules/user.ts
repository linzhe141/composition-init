import api from "@/api";
import { IResDataType, ILoginForm } from "@/interface";
import { Router } from "vue-router";
import menuJson from "@/fakejson/menu.json";
import { TOKEN_NAME } from "@/config/global";
import { DefineComponent } from "vue";

type LoginDataType = {
  userInfo: ILoginForm;
  router: Router;
};
const InitUserInfo = {
  userName: "",
};

type StateType = {
  token: string;
  userInfo: typeof InitUserInfo;
};

type MutationsPayload<T> = {
  commit: (type: string, payload?: any) => void;
  state: T;
};

// 定义的state初始值
// 初始化时从localhostStorage中读取token
// 手动删掉token 只是页面跳转还是会读取到token
// 因为getters是从内存中读取的
const state = {
  token: localStorage.getItem(TOKEN_NAME), // 默认token不走权限
  userInfo: InitUserInfo,
};
const mutations = {
  setToken(state: StateType, token: string) {
    localStorage.setItem(TOKEN_NAME, token);
    state.token = token;
  },
  removeToken(state: StateType) {
    localStorage.removeItem(TOKEN_NAME);
    state.token = "";
  },
  setUserInfo(state: StateType, userInfo: typeof InitUserInfo) {
    state.userInfo = userInfo;
  },
};

const getters = {
  token: (state: StateType) => {
    return state.token;
  },
};

const actions = {
  async login(
    { commit }: MutationsPayload<StateType>,
    { userInfo, router }: LoginDataType
  ) {
    // const res: IResDataType = await api.post('/user/login', userInfo)
    const res = menuJson;
    if (res.success) {
      commit("setToken", res.token);
      commit("setUserInfo", res.data);
      router.push("/");
    }
  },
  async getUserInfo({ commit, state }: MutationsPayload<StateType>) {
    commit("setUserInfo", "userInfo");
  },
  async logout({ commit }: MutationsPayload<StateType>) {
    commit("removeToken");
    commit("setUserInfo", InitUserInfo);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
