import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient} >
    <React.StrictMode>
      <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);