<template>
  <div id="app">
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    <router-view></router-view>

  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";

  @Component({
    name: 'App',
  })
  export default class App extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
  }
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
