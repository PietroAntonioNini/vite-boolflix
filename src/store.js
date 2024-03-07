import {reactive} from 'vue'

export const store = reactive({
    films: [],

    series: [],

    genresFilms:[],
    genresSeries:[],

    searchText:'',

    //Genere selezionato (default nessuno)
    selectedFilmsGenres: 0,
    selectedSeriesGenres: 0,

    //Categoria selezionata (default Home)
    activeButton: 0,
});