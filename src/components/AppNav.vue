<script>
import { store } from '../store';

export default {
    name: 'AppNav',

    data() {
        return {
            store,

            buttons: ['Home', 'Film', 'Serie Tv', 'Top Rated', 'Popular'],
        }
    },

    methods: {
        activateButton(index) {
            this.store.activeButton = index;
        }
    },
}
</script>

<template>
    <nav>
        <div id="logo">
            <img src="/public/img/logo.png" alt="logo">
        </div>

        <ul id="button-category" @click="$emit('change')">
            <li v-for="(button, index) in buttons" @click="activateButton(index)" :class="{ active: store.activeButton === index }"> {{ button }} </li>
        </ul>

        <div id="search">

            <!-- seleziona film in base al genere -->
            <select name="Genre" @change="$emit('option')" v-model="store.selectedFilmsGenres" v-if="store.activeButton == 1">
                <option value="0">Tutti</option>
                <option :value="genre.id" v-for="genre in store.genresFilms">{{ genre.name }}</option>
            </select>

            <!-- seleziona serie in base al genere -->
            <select name="Genre" @change="$emit('option')" v-model="store.selectedSeriesGenres" v-if="store.activeButton == 2">
                <option value="0">Tutti</option>
                <option :value="genre.id" v-for="genre in store.genresSeries">{{ genre.name }}</option>
            </select>
            
            <input type="text" placeholder="Cerca" v-model="store.searchText" @keyup.enter="$emit('search')">
            <button type="submit" @click="$emit('search')">Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 50px;
    background-color: black;

    #logo {
        width: 180px;
        height: 80px;
    
        img {
            width: 100%;
            height: 100%;
        }
    }

    #button-category {
        display: flex;
        justify-content: center;
        gap: 40px;
        list-style-type: none;

        li {
            font-size: 20px;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;

            border-bottom: 5px solid #000000;
            color: #00E06B;

            &:hover,
            &.active {
                border-bottom: 5px solid #00E06B;
            }
        }
    }

    #search {
        width: 600px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;

        select {
            width: 140px;
            padding-left: 5px;
            border: 0;
            border-radius: 8px;
            cursor: pointer;
        }
        
        input {
            width: 350px;
            height: 40px;
            padding: 15px;

            border: 0;
            border-radius: 8px;
        }

        button {
            width: 100px;

            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            border: 0;
            border-radius: 8px;
            cursor: pointer;
            background-color: #0D1C73;

            &:hover {
                background-color: #4C64F2;
            }
        }
    }
}


</style>