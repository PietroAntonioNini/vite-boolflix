<script>
import { store } from '../store';

export default {
    name: 'CardItem',

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
                'ta': 'th',
                'zh': 'cn',
            };
            //restituisci il codice della lingua o la stessa lingua se non trovato
            return languageCodes[language] || language;
        },
    },

    props: {
        cardTitle: String,
        cardOriginalTitle: String,
        cardLanguage: String,
        cardImg: String,
        cardScore: Number,
        cardOverview: String,
    }
}
</script>

<template>
    <div id="box-film" v-if="cardImg != OK">
        <div class="film-content">
            <!-- copertina -->
            <img :src="'https://image.tmdb.org/t/p/original' + cardImg" :alt="'immagine film:' + cardTitle">
    
            <!-- descrizionedietro l'immagine -->
            <div id="film-description">
                <!-- titoli -->
                <span><h3>Titolo:</h3> {{ cardTitle }}</span>
                <span><h3>Titolo originale:</h3> {{ cardOriginalTitle }}</span>
    
                <!-- lingua -->
                <span class="language-img"><h3>Lingua:</h3><img :src="'https://flagcdn.com/w20/' + getLanguageCode(cardLanguage) + '.jpg'" alt=""></span>

                <!-- voto -->
                <span><h3>Voto:</h3> 
                    <span v-for="star in 5" :key="star">
                        <i :class="{ 'fas fa-star': (cardScore / 2) >= star, 'far fa-star': (cardScore / 2) < star }" :style="{ color: (cardScore / 2) >= star ? 'yellow' : 'gray' }"></i>
                    </span>
                </span>

                <!-- trama -->
                <span v-if="cardOverview != ''"><h3>Overview:</h3> {{ cardOverview }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#box-film {
    position: relative;
    width: calc(100% / 6 - 15px/5 * 6);
    min-width: 200px;

    .film-content {
        position: relative;
        perspective: 1000px;
        transform-style: preserve-3d;
        transition: transform 0.5s;

        img {
            width: 100%;
            height: 100%;
        }
    
        #film-description {
            width: 100%;
            height: 98%;
            padding: 10px 20px;
    
            display: none;
            flex-direction: column;
            gap: 5px;
            overflow-y: auto;
    
            position: absolute;
            top: 0;
            left: 0;
    
            font-size: 12px;

            .language-img img {
                width: 30px;
                height: 20px;
                filter: brightness(100%);
            }
        }
    }


    &:hover .film-content {
        transform: rotateY(180deg);
    }

    &:hover .film-content img {
        filter: brightness(0);
    }

    &:hover .film-content #film-description {
        display: flex;
        transform: rotateY(180deg);
    }
}
 
</style>