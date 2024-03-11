<script>
import axios from 'axios';
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

        activeCast: '',

        //attiva o disattiva la visualizzazione del cast
        showCast() {

            if(this.activeCast != true) {
                this.activeCast= true;

            } else {
                this.activeCast= false;
            }
            this.$forceUpdate();
        },

        //salva l'id del film selezionato
        saveIdFilm() {
            this.store.idFilm = this.cardId;
        },

        //funzione per mostrare il cast del film selezionato
        getMovieCredits() {
            axios.get('https://api.themoviedb.org/3/movie/' + this.store.idFilm + '/credits?api_key=9b7fdd843817417b0e4e84b2c0542c07')
            .then(res => {
                // prendo i primi 5 nomi degli attore nel cast
                this.store.cast = res.data.cast.slice(0, 5).map(actor => actor.name).join(', ');
            })
            .catch(err => {
                console.error(err);
            });
        },

        //svuoto il cast quando esco dall'elemento del film attuale
        clearCast() {
            store.cast = '';
            this.activeCast = false;
        },

    },

    props: {
        cardId: Number,
        cardImg: String,
        cardTitle: String,
        cardOriginalTitle: String,
        cardLanguage: String,
        cardScore: Number,
        cardOverview: String,
    }
}
</script>

<template>
    <div id="box-film" v-if="cardImg != OK" @mouseleave="clearCast">
        <div class="film-content">
            <!-- id per il cast -->
            <span v-show="none">{{ cardId }}</span>

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

                <div class="cast">
                    <button @click="showCast(), saveIdFilm(), getMovieCredits()">Cast</button>
                    <span v-if="activeCast">{{ store.cast }}</span>
                </div>

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

            .cast {
                display: flex;
                flex-direction: column;
                gap: 8px;
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