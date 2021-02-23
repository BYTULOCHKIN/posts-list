import Vue from "vue";

import Router from "vue-router";
import Post from "./components/Post.vue";
import Home from "./pages/Home.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "app",
      component: Home
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post,
      props: true
    }
  ]
});
