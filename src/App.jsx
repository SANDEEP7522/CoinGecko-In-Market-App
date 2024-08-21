// import { useState } from 'react'
import './App.css'
// import CoinTable from './Components/CoinTable/CoinTable';
// import NavBar from './Components/NavBar/NavBar';
// import Banner from './Components/Banner/Banner';
import Home from './Components/Pages/Home';
// import { CurrencyContext } from './Components/Context/CurrencyContext';


function App() {
 

 // const [currency, setCurrency] = useState('usd');

  return (
    <>
    {/* <CurrencyContext.Provider value ={{currency, setCurrency}} >  */}
         <Home /> 
    {/* </CurrencyContext.Provider> */}

    </>
  )
}

export default App;
