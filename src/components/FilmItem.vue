<script>
import { store } from '../store';

export default {
    name: 'FilmItem',

    data() {
        return {
          store,
        }
    },

    props: {
        filmTitle: String,
        filmOriginalTitle: String,
        filmLanguage: String,
        filmImg: String,
        filmScore: Number,
        filmOverview: String,
    }
}
</script>

<template>
    <div id="box-film">
        <img :src="'https://image.tmdb.org/t/p/w342' + filmImg" :alt="'immagine film:' + filmTitle">

        <div id="film-description">
            <span><h3>Titolo:</h3> {{ filmTitle }}</span>
            <span><h3>Titolo originale:</h3> {{ filmOriginalTitle }}</span>
            <span><h3>Lingua:</h3> {{ filmLanguage }}</span>
            <span><h3>Voto:</h3> {{ filmScore }}</span>
            <span v-if="filmOverview != ''"><h3>Overview:</h3> {{ filmOverview }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#box-film {
    position: relative;

    #film-description {

        display: none;
        height: 100%;
        padding: 10px;
        overflow-y: auto;

        position: absolute;
        top: 0;

        font-size: 12px;

    }

    &:hover #film-description {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &:hover img {
        filter: brightness(20%);
    }
}
 
</style>