import { createContext, ReactNode, useContext } from 'react';
import useStorage from '../utils/useStorage'; // These utils are used to sync React Context with LocalStorage to persist data

const MyContext = createContext({});

interface ApplicationProviderProps {
  children: ReactNode;
}

export function MyProvider({ children }: ApplicationProviderProps) {
  const [appContext, setAppContext] = useStorage({});

  return (
    <MyContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        appContext,
        setAppContext,
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
