import { createContext, useContext, useState } from 'react';

export const BlockActionsCTX = createContext();
export const useBlockActionsCTX = () => useContext(BlockActionsCTX);

const BlockActionsProvider = props => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  function handleToggleActions(close) {
    setIsActionsOpen(!isActionsOpen);
  }
  function handleCloseActions(close) {
    setIsActionsOpen(false);
  }

  function useActions() {}

  const state = {
    isActionsOpen,
  };
  const handlers = {
    handleCloseActions,
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
