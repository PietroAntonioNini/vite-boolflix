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
            <img src="/public/img/260BFE12-83A1-4D85-89FC-2D9BBC105EFA.png" alt="logo">
        </div>

        <div id="search">
            <input type="text" placeholder="Cerca">
            <button type="submit">Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

nav {
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

            font-size: 14px;
            text-transform: uppercase;
            border: 0;
            border-radius: 8px;
        }
    }
}


</style>