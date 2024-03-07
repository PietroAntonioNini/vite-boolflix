<script>
import { store } from '../store';

export default {
    name: 'FilmItem',

    data() {
        return {
          store,
        }
    },

    methods: {
        getLanguageCode(language) {

            //cambio i codici delle lingue in base alle condizioni specificate
            const languageCodes = {
                'en': 'us',
                'ja': 'jp',
                'ko': 'kr',
                'hi': 'in',
                'ta': 'th'
            };
            //restituisci il codice della lingua o la stessa lingua se non trovato
            return languageCodes[language] || language;
        },
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
        <img :src="'https://image.tmdb.org/t/p/original' + filmImg" :alt="'immagine film:' + filmTitle">

        <div id="film-description">
            <span><h3>Titolo:</h3> {{ filmTitle }}</span>
            <span><h3>Titolo originale:</h3> {{ filmOriginalTitle }}</span>

            <span class="language-img"><h3>Lingua:</h3><img :src="'https://flagcdn.com/w20/' + getLanguageCode(filmLanguage) + '.jpg'" alt=""></span>

            <span><h3>Voto:</h3> 
                <span v-for="star in 5" :key="star">
                    <i :class="{ 'fas fa-star': (filmScore / 2) >= star, 'far fa-star': (filmScore / 2) < star }" :style="{ color: (filmScore / 2) >= star ? 'yellow' : 'gray' }"></i>
                </span>
            </span>


            <span v-if="filmOverview != ''"><h3>Overview:</h3> {{ filmOverview }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#box-film {
    position: relative;
    width: calc(100% / 6 - 15px/5 * 6);
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
    }

    #film-description {
        width: 100%;
        height: 90%;
        margin: 10px 0;
        padding: 0 20px;

        display: none;
        overflow-y: auto;

        position: absolute;
        top: 0;

        font-size: 12px;

        .language-img img {
            width: 30px;
            height: 20px;
            filter: brightness(100%);
        }
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