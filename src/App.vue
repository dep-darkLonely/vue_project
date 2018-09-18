<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-image: url('./assets/login/login4.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
