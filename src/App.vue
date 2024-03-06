<script>
import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
          store,
        }
    },

    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9b7fdd843817417b0e4e84b2c0542c07&query=mercenari').then(res => {
          console.log(res.data.results);
        });
    },

    components: {

    },

    methods: {

    },
}
</script>

<template>
  
</template>

<style>

</style>
