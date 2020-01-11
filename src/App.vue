<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    </ul>
    <div class="test">
      <i class="fas fa-camera"></i>
    </div>

  </div>
</template>

<script>


  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="scss">
  @import url('../node_modules/@fortawesome/fontawesome-free/css/all.min.css');

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .test {
    height: 90px;
    border: 1px solid black;
    background-image: url("./assets/images/logo.png");
  }
</style>
