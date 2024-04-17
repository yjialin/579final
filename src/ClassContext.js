import React, { createContext, useContext, useState } from 'react';

const ClassContext = createContext();

export const useClassContext = () => useContext(ClassContext);

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);

  const addClass = (date, content) => {
    setClasses(prevClasses => [...prevClasses, { date, content }]);
  };

  const deleteClass = index => {
    setClasses(prevClasses => prevClasses.filter((_, i) => i !== index));
  };

  return (
    <ClassContext.Provider value={{ classes, addClass, deleteClass }}>
      {children}
    </ClassContext.Provider>
  );
};