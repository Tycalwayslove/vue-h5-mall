import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "notFond",
        path: "/:path(.*)+",
        redirect: {
            name: "goods",
        },
    },
    {
        name: "user",
        path: "/user",
        component: () => import("@/view/user"),
        meta: {
            title: "会员中心",
        },
    },
    {
        name: "cart",
        path: "/cart",
        component: () => import("@/view/cart"),
        meta: {
            title: "购物车",
        },
    },
    {
        name: "goods",
        path: "/goods",
        component: () => import("@/view/goods"),
        meta: {
            title: "商品详情",
        },
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export { router };
