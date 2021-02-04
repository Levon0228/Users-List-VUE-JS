import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Posts from "../views/Posts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  }
  
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
