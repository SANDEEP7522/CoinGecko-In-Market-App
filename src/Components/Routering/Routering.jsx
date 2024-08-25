import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
// import CoinDetailsPage from "../Pages/CoinDetailsPage";
import Layout from "../Pages/Layout";
import { lazy, Suspense } from 'react';
 import SingleCoinPageLoder from '../Loders/SingleCoinPageLoder';
 import MultiCoinPageLoder from '../Loders/MultiCoinPageLoder';
import CustomErrorBoundry from "../ErrorBoundry/ErrorBoundryUI";



const Home = lazy(() => import ('../Pages/Home'));

const CoinDetailsPage = lazy(() => import('../Pages/CoinDetailsPage'));


function Routering(){
  return(
    <CustomErrorBoundry>
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
    </CustomErrorBoundry>
   

  )

}
export default Routering;