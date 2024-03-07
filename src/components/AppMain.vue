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
        <div id="container-film">
            <div id="category" v-if="store.cards != '' "><h2>Film</h2></div>

            <FilmItem v-for="film in store.cards" :filmTitle="film.title" :filmOriginalTitle="film.original_title" :filmLanguage="film.original_language" :filmScore="film.vote_average" :filmOverview="film.overview" :filmImg="film.poster_path"></FilmItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    #container-film {
        width: 90%;
        margin: auto;
        overflow-x: hidden;
        position: relative;

        display: flex;
        align-items: flex-start;
        gap: 15px;
        flex-flow: row wrap;

        min-height: 100vh;
        padding: 230px 50px 50px;     
        
        #category {
            position: absolute;
            top: 140px;
            font-size: 40px;
        }
    }
</style>