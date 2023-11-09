import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const UserProvider = ({ children }) => {
  const [tamanho, setTamanho] = useState(1);
  const [contrastebg,setContrastebg] = useState('black');
  const [contrastetext,setContrastetext] = useState('white');

  return (
    <MyContext.Provider
      value={{
        tamanho,
        setTamanho,
        contrastebg,
        setContrastebg,
        contrastetext,
        setContrastetext
      }}
    >
      {children}
    </MyContext.Provider>
  );
};