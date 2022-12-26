import { useContext, createContext } from 'react';

export const BlockCTX = createContext();
export const useBlock = () => useContext(BlockCTX);

const BlockContext = props => {
  return (
    <>
      <BlockCTX.Provider value={{ ...props }}>{props.children}</BlockCTX.Provider>
    </>
  );
};

export default BlockContext;
