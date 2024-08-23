import axios from 'axios';
import { CoinGecko_API_URL } from './Constents';

// const CoinGecko_API_URL = 'https://api.coingecko.com/api/v3';

const AxiosIncetance = axios.create({
    baseURL: CoinGecko_API_URL,

})

export default AxiosIncetance;