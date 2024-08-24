import AxiosIncetance from "../../Helpers/AxiosIncetance";


export async function FetchCoinDetails(id) {
// console.log(id);

 try{
     const responce = await AxiosIncetance.get(`/coins/${id}`);
     
        console.log(responce);
        return responce.data;
    }
  catch(error){
        console.log(error);
        return null;
    }

}
export default FetchCoinDetails;


