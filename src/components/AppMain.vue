<script>
import { store } from '../store';
import FilmItem from './FilmItem.vue'

export default {
    name: 'AppMain',

    data() {
        return {
          store,
        }
    },

    components: {
        FilmItem,
    }
}
</script>

<template>
    <main>
        <div id="container">
            <FilmItem v-for="film in store.cards" :filmTitle="film.title" :filmOriginalTitle="film.original_title" :filmLanguage="film.original_language" :filmScore="film.vote_average" :filmImg="film.poster_path"></FilmItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    #container {
        width: 100vw;
        height: calc(100vh - 140px);
        padding: 50px;
        background-color: #4C64F2;
    }
</style>./FilmItem.vue