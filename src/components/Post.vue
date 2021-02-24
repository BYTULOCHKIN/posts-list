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
      link: "https://jsonplaceholder.typicode.com/posts/"
    };
  },

  methods: {
    getPost(id) {
      fetch(this.link + id)
        .then(res => res.json())
        .then(json => (this.post = json))
        .catch(error => console.error(error));
    }
  },
  created() {
    this.getPost(this.id);
  }
};
</script>

<style>
.post {
  color: #fff;
  max-width: 500px;
  max-height: 500px;
  text-transform: lowercase;
}
.post__title {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.post__body {
  font-size: 1.2rem;
}
</style>
