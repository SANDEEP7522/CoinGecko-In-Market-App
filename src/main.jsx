

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter} from 'react-router-dom';

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
//   < QueryClientProvider client={queryClient}>
//   <App />
// </ QueryClientProvider>
   
   
   <BrowserRouter>
    < QueryClientProvider client={queryClient}>
       <App />
    </ QueryClientProvider>
  </BrowserRouter>
  
);



