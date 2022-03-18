<template>
  <div id="initialContent">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
html {
  background: url("./assets/background.png") no-repeat center center fixed;
  background-size: cover;
}
</style>
