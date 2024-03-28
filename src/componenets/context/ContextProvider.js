import React, { createContext, useState } from 'react';

export const LoginContext = createContext(null);

export default function ContextProvider({ children }) {
  const [account, setAccount] = useState("");
  const [pprise,setpprise] = useState("");

  return (
    <div>
      <LoginContext.Provider value={{ account, setAccount ,pprise,setpprise}}>
        {children}
      </LoginContext.Provider>
    </div>
  );
}
