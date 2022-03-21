<template>

  <div>
      <div v-if="!pokemon">
        <h1>Loading...</h1>
      </div>
      <div v-else>
        <h3>Who's that Pokemon!?</h3>
        <PokemonPicture :pokemon="pokemon" :showPokemon='showPokemon'/>
        <PokemonOptions :pokeArray="pokemonArray" @optionSelected='checkAnswer' />
        <div v-if="showAnswer">
          <h2>{{mssg}}!</h2>
          <q-btn style="background: #ffcb05; color: #3562ad" size="xl" label="PLAY AGAIN!" @click="newGame" />
        </div>
      </div>
  </div>
  
  
</template>

<script>

import { defineAsyncComponent } from '@vue/runtime-core';
import getPokemonOptions from '../helpers/getPokemon';

export default {
  name:'PokemonGameIndex',
  data(){
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      mssg: ''

    }
  },
  components: {
    PokemonPicture : defineAsyncComponent( () => import( /* webpackChunkName: "PokemonPictureComponent" */'../components/game/PokemonPicture.vue')),
    PokemonOptions : defineAsyncComponent( () => import( /* webpackChunkName: "PokemonOptionsComponent" */'../components/game/PokemonOptions.vue')),
  },
  methods:{
    async getOptions(){
      this.pokemonArray = await getPokemonOptions();

      this.pokemon = this.pokemonArray[Math.floor(Math.random()*4)];      
    },

    checkAnswer(pokemon, index){
      if(pokemon.id===this.pokemon.id){
        this.mssg=`YEES! its ${pokemon.name}`.toUpperCase();
      }else{
        this.mssg=`Noo!, its ${this.pokemon.name}!!`.toUpperCase();
      }
      this.showPokemon = true;
      this.showAnswer = true;
    },
    newGame(){
      this.pokemonArray= [];
      this.pokemon= null;
      this.showPokemon= false;
      this.showAnswer= false;
      this.mssg= '';

      this.getOptions();
    }
  },
  mounted(){
    this.getOptions();
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: black;
  display: flex;
}
</style>
