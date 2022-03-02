import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import './App.scss';
import AuthContainer from './containers/auth/authContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <AuthContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
