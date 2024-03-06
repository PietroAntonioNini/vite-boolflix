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
    }
}
</script>

<template>
    <div>
        <img :src="'https://image.tmdb.org/t/p/w342' + filmImg" :alt="'immagine film:' + filmTitle">
        <div>
            <span>{{ filmTitle }}</span>
            <span>{{ filmOriginalTitle }}</span>
            <span>{{ filmLanguage }}</span>
            <span>{{ filmScore }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
   
</style>