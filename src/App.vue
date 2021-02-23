<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div>
        <router-link
          v-for="post in posts"
          :key="post.title"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }"
        >
          {{ post.id }}. {{ post.title }}
        </router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Posts list",
      posts: []
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(json => (this.posts = json))
      .catch(error => console.error("Виникла помилка", error))
      .finally(res => console.log(res));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: rgb(0, 104, 186);
  background: linear-gradient(
    90deg,
    rgba(0, 104, 186, 1) 0%,
    rgba(5, 145, 139, 1) 100%
  );
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #001f3f;
  padding: 20px;
}

.container {
  display: flex;
  justify-content: space-around;
}

h1,
h2 {
  font-weight: bold;
  text-align: center;
}

a {
  text-decoration: none;
  max-width: 500px;
  display: block;
  text-transform: capitalize;
  list-style-type: none;
  margin: auto;
  color: #fdfeff;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  min-height: 60px;
  background: rgb(38, 28, 64);
  background: linear-gradient(
    90deg,
    rgba(38, 28, 64, 1) 0%,
    rgba(0, 108, 139, 1) 100%
  );
  /* border: 4px solid rgb(0, 78, 0); */
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
a:hover {
  color: rgb(96, 214, 214);
}
.content {
  width: 40%;
  padding: 10px;
}
@media (max-width: 650px) {
  a {
    font-size: 0.8rem;
  }
}
</style>
