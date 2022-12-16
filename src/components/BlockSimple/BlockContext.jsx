import { useContext, createContext } from 'react';

export const SimpleBlockProvider = createContext();
export const useSimpleBlock = () => useContext(SimpleBlockProvider);

const BlockContext = props => {
  return <SimpleBlockProvider.Provider value={{ ...props }}>{props.children}</SimpleBlockProvider.Provider>;
};

export default BlockContext;
