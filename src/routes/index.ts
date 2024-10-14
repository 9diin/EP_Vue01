import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
/** 페이지 */
import HomeView from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: HomeView }];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
