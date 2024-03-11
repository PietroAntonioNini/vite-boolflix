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

      //film      
      axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
        this.store.films = res.data.results;
      });

      //serie TV
      axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
        this.store.series = res.data.results;
      });

      //generi (Film e Serie)
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
        this.store.genresFilms = res.data.genres;
      });

      axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
        this.store.genresSeries = res.data.genres;
      });
  },

  components: {
    AppNav,
    AppMain,
  },

  methods: {

    //filtra in base al nome ricercato
    searchContent() {

      //se il campo input è vuoto restituisco tutti i contenuti altrimenti quelli cercati
      if (!this.store.searchText || this.store.searchText.trim() === '') {
        //film      
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
          this.store.films = res.data.results;
        });

        //serie TV
        axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
          this.store.series = res.data.results;
        });

      } else {
        //film
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9b7fdd843817417b0e4e84b2c0542c07&query=' + this.store.searchText).then(res => {
          this.store.films = res.data.results;
        });
          
        //serie TV
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=9b7fdd843817417b0e4e84b2c0542c07&query=' + this.store.searchText).then(res => {
          this.store.series = res.data.results;
        });
      }
    },

    //filtra i film in base al genere di contenuto scelto dalla lista
    filterFilmsGenre() {

      let urlFilm = 'https://api.themoviedb.org/3/discover/movie?api_key=9b7fdd843817417b0e4e84b2c0542c07&with_genres=';

      if (this.store.selectedFilmsGenres != 0) {

        urlFilm += this.store.selectedFilmsGenres;

      } else {

        urlFilm = 'https://api.themoviedb.org/3/trending/movie/day?api_key=9b7fdd843817417b0e4e84b2c0542c07';

      }

      axios.get(urlFilm).then(res => {
        this.store.films = res.data.results;
      });
     
    },

    //filtra le serie TV in base al genere di contenuto scelto dalla lista
    filterSeriesGenre() {

      let urlSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=9b7fdd843817417b0e4e84b2c0542c07&with_genres=';

      if (this.store.selectedSeriesGenres != 0) {

        urlSeries += this.store.selectedSeriesGenres;

      } else {

        urlSeries = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9b7fdd843817417b0e4e84b2c0542c07';

      }

      axios.get(urlSeries).then(res => {
        this.store.series = res.data.results;
      });

    },

    //filtra i contenuti in base alla scelta dei bottoni nel nav
    filterContentButtons() {

      let urlFilm = '';
      let urlSerie = '';

      if (this.store.activeButton == 3) {

        urlFilm = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9b7fdd843817417b0e4e84b2c0542c07';
        urlSerie = 'https://api.themoviedb.org/3/tv/top_rated?api_key=9b7fdd843817417b0e4e84b2c0542c07';

      } else if (this.store.activeButton == 4) {
        
        urlFilm = 'https://api.themoviedb.org/3/movie/popular?api_key=9b7fdd843817417b0e4e84b2c0542c07';
        urlSerie = 'https://api.themoviedb.org/3/tv/popular?api_key=9b7fdd843817417b0e4e84b2c0542c07';

      } else {

        urlFilm = 'https://api.themoviedb.org/3/trending/movie/day?api_key=9b7fdd843817417b0e4e84b2c0542c07';
        urlSerie = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9b7fdd843817417b0e4e84b2c0542c07';

      }

      axios.get(urlFilm).then(res => {
        this.store.films = res.data.results;
      });

      axios.get(urlSerie).then(res => {
        this.store.series = res.data.results;
      });
    },

    // viewCast() {
    //   axios.get('https://api.themoviedb.org/3/movie/' + this.store.idFilm + '/credits?api_key=9b7fdd843817417b0e4e84b2c0542c07').then(res => {
    //     this.store.cast = res.data
    //   });
    // }
  }
}

</script>

<template>
  <!-- menu con i filtri e il campo di ricerca -->
  <AppNav @search="searchContent()" @option="filterFilmsGenre(),filterSeriesGenre()" @change="filterContentButtons()"></AppNav>
  
  <!-- container dei film e delle serie tv -->
  <div id="container">
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss" scoped>
#container {
  background-color: #4C64F2;
}
</style>
