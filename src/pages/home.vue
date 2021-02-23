<template>
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


a {
  text-decoration: none;
  margin: auto;
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
