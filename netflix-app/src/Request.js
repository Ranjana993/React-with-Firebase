const API_Key = "0bf1f1764a047518c0cff922efe2ac3c"
const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=eng-US&page=1`,
    requestTopRating: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=eng-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=eng-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=eng-US&page=1`
}
export default request