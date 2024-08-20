import AxiosIncetance from "../../Helpers/AxiosIncetance";

export async function FetchCoinData() {
    
    try{
        const responce = await AxiosIncetance.get("/coins/markets?vs_currency=usd");

        console.log(responce);
        return responce;
    }

    catch(error){
        console.log(error);
        return null;
        

    }

}