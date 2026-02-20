import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '../../components/Context/UserContext';
import Loader from '../../components/Loader/Loader';
import { useLoader } from '../../components/Context/LoaderContext';
import LottieLoader from "../../components/Loader/LottieLoader";

const App = () => { 
  const { showLoader, lottieLoader } = useLoader();

  return (
    <div className="App" id='scrool'>
      {showLoader && <Loader />}
      <LottieLoader lottieLoader={lottieLoader} />
      <UserProvider>
          <AllRoute/>
          <ToastContainer/>
          </UserProvider>
    </div>
  );
}

export default App;

