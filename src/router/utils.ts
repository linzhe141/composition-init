import { markRaw } from "vue";
import { IMenuItem } from "@/interface";
import Content from "../components/Content.vue";
import Tpl from "../components/Tpl.vue";

export class RouterUtils {
  formatRedirect(data: IMenuItem[], parentNode?: IMenuItem) {
    let redirect = "";
    data.forEach((item) => {
      if (item.children?.length) {
        item.children = this.formatRedirect(item.children, item);
      }
      if (!redirect) {
        redirect = item.redirect || item.index;
      }
    });
    if (parentNode) {
      parentNode.redirect = redirect;
    }
    return data;
  }
  getMenuRoutes(routes: IMenuItem[], result: Array<any> = []) {
    routes.forEach((item: IMenuItem) => {
      if (!item.children.length) {
        result.push({
          name: item.name,
          path: item.index,
          component: markRaw(Content),
          meta: item.meta,
        });
      } else {
        result.push({
          name: item.name,
          path: item.index,
          redirect: item.redirect,
          component: markRaw(Tpl),
          meta: item.meta,
        });
      }
      if (item.children.length) {
        return this.getMenuRoutes(item.children, result);
      }
    });
    return result;
  }
  getRedirectRoutes(routes: IMenuItem[]): IMenuItem | undefined {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      if (!item.children.length) {
        return item;
      }
      if (item.children.length) {
        return this.getRedirectRoutes(item.children);
      }
    }
  }
}
