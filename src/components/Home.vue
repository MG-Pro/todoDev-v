<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="test">
      <i class="fas fa-camera"/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator"

  @Component({
    name: 'App'
  })
  export default class App extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
  }
</script>

<style lang="scss">


</style>
