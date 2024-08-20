import AxiosIncetance from "../../Helpers/AxiosIncetance";


export async function FetchCoinData(page=1, currency='usd') {

    const perpage = 10; 


    
    try{
        const responce = await AxiosIncetance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perpage}&page=${page} `);

        console.log(responce);
        return responce;
    }

    catch(error){
        console.log(error);
        return null;
        

    }

}


export default FetchCoinData;


