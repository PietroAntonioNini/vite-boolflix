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
            <FilmItem v-for="film in store.cards" :filmTitle="film.title" :filmOriginalTitle="film.original_title" :filmLanguage="film.original_language" :filmScore="film.vote_average" :filmOverview="film.overview" :filmImg="film.poster_path"></FilmItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    #container {
        width: 90%;
        margin: auto;
        overflow-x: hidden;

        display: flex;
        align-items: flex-start;
        gap: 15px;
        flex-flow: row wrap;

        min-height: 100vh;
        padding: 180px 50px 50px;        
    }
</style>