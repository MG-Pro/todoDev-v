<template>
  <div id="app">
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    </ul>
    <h1>{{ msg }}</h1>
    <div class="test">
      <i class="fas fa-camera"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";

  @Component({
    name: 'App'
  })
  export default class App extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
  }
</script>

<style lang="scss">


</style>
