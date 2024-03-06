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
        });
    },

    components: {
      AppNav,
      AppMain,
    },

    methods: {

      searchFilm() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9b7fdd843817417b0e4e84b2c0542c07&query=' + this.store.searchText).then(res => {
          this.store.cards = res.data.results;
        });
      }
    },
}
</script>

<template>
  <AppNav @search="searchFilm()"></AppNav>
  
  <div id="container">
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss" scoped>
#container {
  background-color: #4C64F2;
}
</style>
