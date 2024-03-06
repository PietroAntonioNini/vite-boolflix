<script>
import axios from 'axios';
import { store } from './store';
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'

export default {
    data() {
        return {
          store,
        }
    },

    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9b7fdd843817417b0e4e84b2c0542c07&query=ritorno+al+futuro').then(res => {
          this.store.cards = res.data.results;
          console.log(this.store.cards);
        });
    },

    components: {
      AppNav,
      AppMain,
    },

    methods: {

    },
}
</script>

<template>
  <AppNav></AppNav>
  
  <AppMain></AppMain>
</template>

<style>

</style>
