<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  background-color: $color-grey-primary;
  margin-top: 60px;
  padding: 0 30px;

  @include respond(tab-land) {
    background-color: $color-grey-secondary;
  }
}
</style>
