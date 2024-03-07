import {reactive} from 'vue'

export const store = reactive({
    films: [],

    series: [],

    genres:[],

    searchText:'',

    //Genere selezionato (default nessuno)
    selectedGenres: 0,

    //Categoria selezionata (default Home)
    activeButton: 0,
});