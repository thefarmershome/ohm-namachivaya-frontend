import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const [lottieLoader, setLottieLoader] = useState(false);
  const startLoading = () => {
    setLoadingCount(prev => prev + 1);
  };

  const stopLoading = () => {
    setLoadingCount(prev => {
      const newCount = prev - 1;
      return newCount < 0 ? 0 : newCount; // Prevent negative count
    });
  };

  const showLottieLoader = () => {
    setLottieLoader(true);
  };

  const hideLottieLoader = () => {
    setLottieLoader(false);
  };

  const showLoader = loadingCount > 0;

  return (
    <LoaderContext.Provider value={{ 
      showLoader, 
      startLoading, 
      stopLoading,
      loadingCount,
      lottieLoader,
      showLottieLoader,
      hideLottieLoader,
    }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext); 