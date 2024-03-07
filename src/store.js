import {reactive} from 'vue'

export const store = reactive({
    films: [],

    series: [],

    genres:[],

    searchText:'',
    selectedGenres: '0',
});