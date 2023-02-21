import '../styles/globals.css'
import { Provider } from 'react-redux';
import { persistor, store } from '../middleware/store';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    
        <Component {...pageProps} />    
  
    </Provider>
  );
}

export default MyApp
