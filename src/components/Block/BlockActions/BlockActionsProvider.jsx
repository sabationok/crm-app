import { createContext, useContext, useState } from 'react';

export const BlockActionsCTX = createContext();
export const useBlockActionsCTX = () => useContext(BlockActionsCTX);

const BlockActionsProvider = props => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  function handleToggleActions() {
    setIsActionsOpen(!isActionsOpen);
  }
  function useActions() {}

  const state = {
    isActionsOpen,
  };
  const handlers = {
    handleToggleActions,
    useActions,
  };

  return (
    <>
      <BlockActionsCTX.Provider value={{ ...props, ...state, ...handlers }}>{props?.children}</BlockActionsCTX.Provider>
    </>
  );
};

export default BlockActionsProvider;
