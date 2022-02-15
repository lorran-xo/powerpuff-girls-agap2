import React, { createContext, ReactNode, useContext, useState } from 'react';

const MyContext = createContext({});

interface ApplicationProviderProps {
  children: ReactNode;
}

export function MyProvider({ children }: ApplicationProviderProps) {
  const [tvShowData, setTvShowData] = useState({});

  return (
    <MyContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        tvShowData,
        setTvShowData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function getContext() {
  const context = useContext(MyContext);
  return context;
}
