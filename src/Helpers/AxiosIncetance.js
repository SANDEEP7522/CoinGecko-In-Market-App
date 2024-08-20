import axios from 'axios';

const AxiosIncetance = axios.create({
    baseURL: CoinGecko_API_URL, 

})

export default AxiosIncetance;