<template>
  <h3>Who's that Pokemon!?</h3>
  <PokemonPicture :pokemonId="25" :showPokemon="false" />
  <PokemonOptions :pokeArray="['bug', 'fire', 'ghost']" />
</template>

<script>
import PokemonPicture from "../components/game/PokemonPicture.vue";
import PokemonOptions from "../components/game/PokemonOptions.vue";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: black;
  display: flex;
}
</style>
