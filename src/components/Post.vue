<template lang="html">
  <div class="post" v-if="post">
    <h2 class="post__title">
      {{ post.title }} <br />
      (Author - id{{ post.id }})
    </h2>
    <p class="post__body">{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      post: null,
      endpoint: "https://jsonplaceholder.typicode.com/posts/"
    };
  },

  methods: {
    getPost(id) {
      fetch(this.endpoint + id)
        .then(res => res.json())
        .then(json => (this.post = json))
        .catch(error => console.error(error))
        .finally(res => console.log(res));
    }
  },
  watch: {
    $route() {
      this.getPost(this.id);
    }
  }
};
</script>

<style>
.post {
  color: #fff;
  text-transform: lowercase;
}
.post__title {
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>
