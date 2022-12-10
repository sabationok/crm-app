import { useContext, createContext } from 'react';

export const BlockProvider = createContext();
export const useBlock = () => useContext(BlockProvider);

const BlockContext = props => {
  return <BlockProvider.Provider value={{ ...props }}>{props.children}</BlockProvider.Provider>;
};

export default BlockContext;
