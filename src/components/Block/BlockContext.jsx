import { useContext, createContext } from 'react';
import { actionsBlockLarge, actionsBlockSmall } from './constants';

export const BlockProvider = createContext();
export const useBlock = () => useContext(BlockProvider);

const BlockContext = props => {
  return (
    <BlockProvider.Provider value={{ ...props, actionsBlockLarge, actionsBlockSmall }}>
      {props.children}
    </BlockProvider.Provider>
  );
};

export default BlockContext;
