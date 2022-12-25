import { useContext, createContext } from 'react';
import blockActions from './blockActions';

export const BlockProvider = createContext();
export const useBlock = () => useContext(BlockProvider);

const BlockContext = props => {
  return (
    <>
      <BlockProvider.Provider value={{ ...props, ...blockActions }}>{props.children}</BlockProvider.Provider>
    </>
  );
};

export default BlockContext;
