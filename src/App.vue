<template>
  <div id="app">
    <menu-bar/>
  </div>
</template>

<script>
  import MenuBar from "./components/MenuBar";

  export default {
    name: 'App',
    components: {MenuBar}
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
