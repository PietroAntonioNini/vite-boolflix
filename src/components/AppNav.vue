<script>
import { store } from '../store';

export default {
    name: 'AppNav',

    data() {
        return {
          store,
        }
    },
}
</script>

<template>
    <nav>
        <div id="logo">
            <img src="/public/img/logo.png" alt="logo">
        </div>

        <div id="search">
            <input type="text" placeholder="Cerca" v-model="store.searchText">
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
        height: 100px;
    
        img {
            width: 100%;
            height: 100%;
        }
    }

    #search {
        width: 550px;
        display: flex;
        justify-content: space-between;
        input {
            width: 400px;
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