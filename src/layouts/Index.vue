<template>
  <router-link :to="{ name: 'gameIndex' }">
    <q-btn style="background: #ffcb05; color: #3562ad" size="xl" label="GAME" />
  </router-link>
</template>

<script>
export default {
  methods: {
    startGame() {
      console.log("first");
    },
  },
};
</script>

<style lang="scss" scoped>
q-btn {
  outline-color: #3562ad;
  border-color: #3562ad;
  border: 1px;
  align-content: center;
  position: absolute;
}
</style>
