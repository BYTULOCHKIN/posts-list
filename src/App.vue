<template>
  <div id="app">
    <div class="container">
      <router-link to="/"
        ><h1 v-bind:title="title">{{ msg }}</h1></router-link
      >
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Post list",
      title: "Press me for go home"
    };
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}
h1 {
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #001f3f;
  padding: 20px;
}
</style>
