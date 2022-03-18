<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-item v-for="pokemon in pokeArray" :key="pokemon.id" clickable v-ripple>
        <q-item-section>Image avatar</q-item-section>
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="iconTypeSrc(pokemon)" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    pokeArray: {
      type: Array,
      required: true,
    },
  },
  methods: {
    iconTypeSrc(type) {
      return `https://raw.githubusercontent.com/itsjavi/pokemon-assets/main/assets/svg/types/${type}.svg`;
    },
  },
};
</script>

<style></style>
