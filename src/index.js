import React from 'react';
import ReactDOM from 'react-dom';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'react-dates/lib/css/_datepicker.css';
import './index.css';
import 'animate.css/animate.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PartnerProvider } from './hooks/query/usePartner';

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <PartnerProvider>
        <App />
      </PartnerProvider>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);

reportWebVitals();
