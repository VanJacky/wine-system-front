import Vue from "vue";
import VueRouter from "vue-router";
import { Route } from "vue-router";
import { Store } from "vuex";
import t from "@/i18n";
// 扩充
declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store<any>;
    $t: t;
  }
}
