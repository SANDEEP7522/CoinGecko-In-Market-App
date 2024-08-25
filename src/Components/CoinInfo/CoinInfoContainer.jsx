import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import currencyStore from '../Store/Store';
import { useState } from "react";
import { FetchCoinHistoricData } from '../Serviecs/FetchCoinHistoricData';
import MultiCoinPageLoder from "../Loders/MultiCoinPageLoder";
import Alert from "../Alert/Alert";




function CoinInfoContainer(coinId){

    const {currency} =  currencyStore();

    const [days, setDays] = useState(7);
   
const [interval, setCoinInterval] = useState('daily');

  const {data: historicData, isLoading, isError} = useQuery(['coinHistoricalData', coinId, currency, days, interval], () => FetchCoinHistoricData(coinId, currency, days, interval), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  if (isLoading) {
    return <MultiCoinPageLoder />
  }
  if (isError) {
    return <Alert  message = "Error fetching data" type = "error" />
  }
    
    return(
     <>
             <CoinInfo 
             historicData={historicData} 
             setDays={setDays} 
             setCoinInterval={setCoinInterval}
             days={days}
             currency={currency}
            
            />
     </>
    )
}
export default CoinInfoContainer;