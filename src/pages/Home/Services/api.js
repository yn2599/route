import axios from "axios";

//6bf150927b3c7b0fe0fd5aa25fdfb244

//https://api.themoviedb.org/3/movie/550?api_key=6bf150927b3c7b0fe0fd5aa25fdfb244

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;