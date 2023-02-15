import '../styles/globals.css'
import { motion } from "framer-motion";
import Transition from "../components/Transition/Transition"
import { Provider } from 'react-redux';
import { store } from './store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />    
    </Provider>
  );
}

export default MyApp
