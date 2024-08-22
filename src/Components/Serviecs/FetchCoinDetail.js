import AxiosIncetance from "../../Helpers/AxiosIncetance";


export async function FetchCoinDetail(id) {

 try{
     const responce = await AxiosIncetance.get(`/coins/${id} `);

        // console.log(responce);
        return responce.data;
    }
  catch(error){
        console.log(error);
        return null;
    }

}
export default FetchCoinDetail;


