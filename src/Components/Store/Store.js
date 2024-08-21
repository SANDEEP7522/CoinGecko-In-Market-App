import {create} from 'zustand';
import { CurrencyContext } from '../Context/CurrencyContext';

const store = create((set) => ({
     Currency: 'usd',
     setCurrency: (newCurrency) => set ((state) => {
    
    return{
        ...state,
        Currency: newCurrency,
    }
  })
}));

export default store;