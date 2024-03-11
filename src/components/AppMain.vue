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
        <!-- container dei Film -->
        <div id="container-film" v-if="store.films != '' && store.activeButton == 0 || store.activeButton == 1 || store.activeButton == 3 || store.activeButton == 4">
            <div id="category"><h2>Film</h2></div>

            <CardItem v-for="film in store.films" :cardId="film.id" :cardTitle="film.title" :cardOriginalTitle="film.original_title" :cardLanguage="film.original_language" :cardScore="film.vote_average" :cardOverview="film.overview" :cardImg="film.poster_path"></CardItem>
        </div>

        <!-- container delle serie TV -->
        <div id="container-serie" v-if="store.series != '' && store.activeButton == 0 || store.activeButton == 2 || store.activeButton == 3 || store.activeButton == 4">
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