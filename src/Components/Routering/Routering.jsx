import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
// import CoinDetailsPage from "../Pages/CoinDetailsPage";
import Layout from "../Pages/Layout";
import { lazy, Suspense } from 'react';
 import SingleCoinPageLoder from '../Loders/SingleCoinPageLoder';
 import MultiCoinPageLoder from '../Loders/MultiCoinPageLoder';



const Home = lazy(() => import ('../Pages/Home'));

const CoinDetailsPage = lazy(() => import('../Pages/CoinDetailsPage'));


function Routering(){
  return(

    <Routes>
      <Route path="/" element={<Layout />}> 
         <Route index element= {
          <Suspense fallback={<MultiCoinPageLoder/>}>
              < Home/>
          </Suspense>
        
          } />
         
         
         <Route path="/details/:coinId" element={
          
          <Suspense fallback={<SingleCoinPageLoder/>} >
              <CoinDetailsPage />
          </Suspense>
        } />
            
       </Route>
    </Routes>

  )

}
export default Routering;