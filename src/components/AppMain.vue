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
            <div id="films-container">
                <FilmItem v-for="film in store.cards" :filmTitle="film.title" :filmOriginalTitle="film.original_title" :filmLanguage="film.original_language" :filmScore="film.vote_average" :filmOverview="film.overview" :filmImg="film.poster_path"></FilmItem>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    #container {
        overflow-x: hidden;

        #films-container {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 15px;
            flex-flow: row wrap;

            min-height: 100vh;
            padding: 180px 50px 50px;

            background-color: #4C64F2;
        }
    }
</style>