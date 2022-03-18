<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      class="hidden-pokemon"
      :src="imgSource"
      alt="pokemon"
    />
    <img v-else :src="imgSource" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSource() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  height: 200px;
}

img {
  height: 200px;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>
