import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import Post from "./components/Post.vue";
// import Hello from "./components/Hello.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post,
      props: true
    }
  ]
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
