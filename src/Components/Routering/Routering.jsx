import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CoinDetailsPage from "../Pages/CoinDetailsPage";

function Routering(){
  return(

    <Routes>
        <Route path="/" element={<Home />}> </ Route>
        <Route path="/details/:coinId" element={<CoinDetailsPage />}> </ Route>
            
       
    </Routes>

  )

}
export default Routering;