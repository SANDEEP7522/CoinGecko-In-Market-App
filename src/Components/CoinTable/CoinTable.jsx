import {useState } from "react";
import { useQuery } from "react-query";
import { FetchCoinData } from "../Serviecs/FetchCoinData";
import currencyStore from '../Store/Store';
import { useNavigate } from "react-router-dom";
import MultiMorePage from '../Loders/MultiMorePage';


function CoinTable() { 
  
  const {currency} =  currencyStore();
  
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const {data, isLoading, isError,error }  = useQuery(['coins', page],
    () => FetchCoinData(page, currency), {
    // retry: 2,
    // retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
    
  });
 
  function handleCoinRedirect(id){
    //  console.log(id);
     navigate(`/details/${id}`);
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }
  if(isLoading){
    return <MultiMorePage/>;
  }
 return (
        
   <div  className="my-5 flex flex-col items-center justify-center gap-5 w-[80vm] mx-auto">
              {currency}
          {/* for header part of coins */}
          <div className="w-full h-10 bg-yellow-400 text-black 
          flex py-4 px-2 font-semibold items-center justify-center">

            <div className="basis-[35%]">
              Coin
            </div>

            <div className="basis-[30%]">
               Price
            </div >
            
            <div className="basis-[25%]">
              24H Change
            </div>
            
            <div className="basis-[20%]">
              Market Cap
            </div>
            <div className="basis-[20%]">
             24h-percentage
            </div>  

          </div>


          <div className=" flex flex-col w-[80vw] mx-auto">
            {isLoading && <div className=" font-bold  ">Loding.........</div>}
            {data && data.map((coin) => { 
            return(
                  <div onClick={() => handleCoinRedirect(coin.id)} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">

                    <div className="flex items-center justify-start gap-3
                    basis-[35%] ">
                         
                      <div  className=" w-[5rem] h-[5rem] ">
                          <img src={coin.image} alt="" className=" w-full h-full " loading="lazy"/>
                      </div>

                      <div className=" flex flex-col ">
                        <div className='text-2xl'>
                          {coin.name}
                          </div>
                        <div className='text-xl'>
                          {coin.symbol}
                        </div>
                      </div>
 
                  
                         <div >
                        {coin.high_24h}
                         </div>
                         <div >
                          {coin.price_change_24h}
                         </div> 
                        <div>
                        {coin.market_cap }
                       
                        </div> 
                         <div>
                        {coin.price_change_percentage_24h}
                         </div>
                     


                    </div>
                  </div>

            );
            })};

          </div>
           



          <div className='flex gap-4 justify-center items-center '>
                <button
                disabled = {page === 1}
                onClick={() => setPage(page -1)}
                className=" btn btn-primary text-white text-2xl ">
                  Prev
                 </button>
                <button onClick={() => setPage(page + 1)}
                className=" btn btn-secondary text-white text-2xl ">
                   Next
                </button>
          </div> 

        </div>

        
      );
   }
  
export default CoinTable;
