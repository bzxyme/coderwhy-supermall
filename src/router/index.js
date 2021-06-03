import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/home/home.vue");
const Category = () => import("../views/category/category.vue");
const Cart = () => import("../views/cart/cart.vue");
const Profile = () => import("../views/profile/profile.vue");

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = createRouter({
  // mode:'history',
  routes,
  //vue router4 html history模式使用如下代码调用废除了mode:'history'
  history: createWebHistory()
});

export default router;
