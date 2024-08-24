import {create} from 'zustand';
import { CurrencyContext } from '../Context/CurrencyContext';

const store = create((set) => ({
     currency: 'usd',
     setCurrency: (newCurrency) => set ((state) => {
    
    return{
        ...state,
        currency: newCurrency,
    }
  })
}));

export default store;