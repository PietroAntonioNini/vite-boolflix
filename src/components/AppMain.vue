<script>
import { store } from '../store';
import CardItem from './CardItem.vue'

export default {
    name: 'AppMain',

    data() {
        return {
          store,
        }
    },

    components: {
        CardItem,
    }
}
</script>

<template>
    <main>
        <div id="container-film" v-if="store.films != '' ">
            <div id="category"><h2>Film</h2></div>

            <CardItem v-for="film in store.films" :cardTitle="film.title" :cardOriginalTitle="film.original_title" :cardLanguage="film.original_language" :cardScore="film.vote_average" :cardOverview="film.overview" :cardImg="film.poster_path"></CardItem>
        </div>

        <div id="container-serie" v-if="store.series != '' ">
            <div id="category"><h2>Serie TV</h2></div>

            <CardItem v-for="serie in store.series" :cardTitle="serie.name" :cardOriginalTitle="serie.original_name" :cardLanguage="serie.original_language" :cardScore="serie.vote_average" :cardOverview="serie.overview" :cardImg="serie.poster_path"></CardItem>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    #container-film, 
    #container-serie {
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