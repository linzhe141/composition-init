import api from "@/api";
import { markRaw, DefineComponent } from "vue";
import { IResDataType } from "@/interface";
import { RouterUtils } from "@/router/utils";
import Layout from "@/components/Layout.vue";
import router from "@/router";
import { IMenuItem } from "@/interface";
import { HEADER } from "@/config/global";
import * as _ from "lodash";
import menuJson from "@/fakejson/menu.json";

interface IRoutes {
  name: string;
  path: string;
  redirect: string;
  component: DefineComponent;
  children: IRoutes[];
}

type StateType = {
  menuData: IMenuItem[];
  menuRoutes: IRoutes[];
  headerMenuData: IMenuItem[];
  navMenuData: IMenuItem[];
};

type MutationsPayload<T> = {
  commit: (type: string, payload?: any) => void;
  state: T;
};

const routerUtils: RouterUtils = new RouterUtils();
function formatMenuLevel(
  menuData: IMenuItem[],
  level: number = 1
): IMenuItem[] {
  menuData.forEach((item) => {
    item.level = level;
    if (item.children?.length) {
      formatMenuLevel(item.children, level + 1);
    }
  });
  return menuData;
}

function formatMenuHeadAcitve(menuData: IMenuItem[]): IMenuItem[] {
  if (HEADER <= 0) return menuData;
  menuData.forEach((item) => {
    if (item.level && item.level >= HEADER) {
      item.children.forEach((el) => {
        if (!item.meta?.headActive) {
          el.meta = { headActive: item.name };
        } else {
          el.meta = { headActive: item.meta.headActive };
        }
      });
    }
    if (item.children?.length) {
      formatMenuHeadAcitve(item.children);
    }
  });
  return menuData;
}
// 获取左侧菜单栏通过父节点的index
export function getNavData(menuData: IMenuItem[], index: string): IMenuItem[] {
  for (let i = 0; i < menuData.length; i++) {
    const item = menuData[i];
    if (item.index == index) {
      return item.children;
    }
    if (item.children?.length) {
      const childNavData = getNavData(item.children, index);
      if (childNavData.length) {
        return childNavData;
      }
    }
  }
  return [];
}

const getHeaderMenuData = (
  menuData: IMenuItem[],
  header: number
): IMenuItem[] => {
  if (header <= 0) return [];
  menuData.forEach((item) => {
    if (item.level == header) {
      item.children = [];
    }
    if (item.children?.length) {
      getHeaderMenuData(item.children, header);
    }
  });
  return menuData;
};

// 定义的state初始值
const state: StateType = {
  menuData: [],
  menuRoutes: [],
  // 头部菜单
  headerMenuData: [],
  // 左侧菜单
  navMenuData: [],
};

const mutations = {
  setMenuData(state: StateType, menuData: IMenuItem[]) {
    state.menuData = menuData;
  },
  removeMenuData(state: StateType) {
    state.menuData = [];
  },
  setMenuRoutes(state: StateType, menuRoutes: IRoutes[]) {
    state.menuRoutes = menuRoutes;
  },
  setHeaderMenuData(state: StateType, headerMenuData: IMenuItem[]) {
    state.headerMenuData = headerMenuData;
  },
  setNavMenuData(state: StateType, navMenuData: IMenuItem[]) {
    state.navMenuData = navMenuData;
  },
};

const getters = {
  menuData: (state: StateType) => {
    return state.menuData;
  },
  menuRoutes: (state: StateType) => {
    return state.menuRoutes;
  },
  headerMenuData: (state: StateType) => {
    return state.headerMenuData;
  },
  navMenuData: (state: StateType) => {
    return state.navMenuData;
  },
};

const actions = {
  async getMenuData({ commit }: MutationsPayload<StateType>) {
    // const res: IResDataType = await api.get('/todo/menuData')
    const res = menuJson;
    if (res.success) {
      const data = formatMenuHeadAcitve(formatMenuLevel(res.data));
      commit("setMenuData", data);

      const cloneData = _.cloneDeep(data);
      // 头部菜单
      const headerMenuData = getHeaderMenuData(cloneData, HEADER);
      commit("setHeaderMenuData", headerMenuData);
    }
  },
  async initMenuRoutes({ commit, state }: MutationsPayload<StateType>, menuData: IMenuItem[]) {
    const rotues = [
      {
        path: "/",
        component: markRaw(Layout),
        // 菜单栏路由数据
        children: routerUtils.getMenuRoutes(
          routerUtils.formatRedirect(menuData)
        ),
        redirect: routerUtils.getRedirectRoutes(menuData)?.index,
      },
    ];
    commit("setMenuRoutes", rotues);
    state.menuRoutes.forEach((item: IRoutes) => router.addRoute(item));
  },
  async restore({ commit, state }: MutationsPayload<StateType>) {
    state.menuRoutes.forEach((item: IRoutes) => {
      router.removeRoute(item.name);
    });
    commit("setMenuRoutes", []);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
