import React, { createContext, useContext } from 'react';

export const PageCTX = createContext();
export const usePage = () => useContext(PageCTX);
const PageProvider = props => {
  return (
    <>
      <PageCTX.Provider value={{ ...props }}>{props.children}</PageCTX.Provider>
    </>
  );
};

export default PageProvider;
