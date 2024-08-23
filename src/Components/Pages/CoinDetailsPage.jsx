import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FetchCoinDetails } from "../Serviecs/FetchCoinDetails";



function CoinDetailsPage(){

    const {coinId} = useParams();     

    const {isError, isLoading, data: coin} = useQuery(["coin", coinId], () => FetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
        
      });

    // useEffect(() =>{
    //   console.log(coin);
    // },[coin]);

    if (isLoading) {
        return <div>Loading.........</div>
    }
    if (isError) {
        return <div>Error: Something Wents Wrong </div>
    }


return(
   
   <div className=" flex flex-col md:felx-row ">
    <div className=" md:w-1/3 w-full flex flex-col items-center mt-6 md:-mt-0 border-r-2 border-gray-500 ">
        <img 
         src={coin?.image?.large} 
         alt={coin?.name} 
         className="h-53 mb-5"
        />
    </div>
 </div>
)

}
export default CoinDetailsPage;