<template>
  <div id="app">
    <home-component/>
  </div>
</template>

<script>
    import HomeComponent from "./components/HomeComponent";

    export default {
        name: 'App',
        components: {HomeComponent}
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
