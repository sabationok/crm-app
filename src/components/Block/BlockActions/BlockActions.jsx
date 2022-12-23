import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

// import BlockActionsList from './ActionsList/ActionsList';

// import BlockModalPortal from '../BlockModal/BlockModalPortal';

import { useBlock } from '../BlockContext';

import s from './BlockActions.module.scss';

const BlockActions = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isModalOpen, handleToggleModal } = useBlock();
  //  iconId, actions, actionsPrimary, actionsWithFilter, ActionsComp, id, isDarkTheme
  // function handleIsopen(params) {
  //   setIsOpen(!isOpen);
  // }
  // const memoizedActionsArr = useMemo(() => {
  //   switch (actions) {
  //     case 'primary':
  //       return actionsPrimary;

  //     case 'withFilter':
  //       return actionsWithFilter;

  //     default:
  //       return [];
  //   }
  // }, [actions, actionsPrimary, actionsWithFilter]);

  return (
    <>
      <ButtonIcon iconId={isModalOpen ? 'close' : 'actions-h'} size="100%" iconSize="24px" className={s.btn} onClick={handleToggleModal} />

      {/* <BlockModalPortal id={id ?? iconId}>
        {isModalOpen && (
          <>
            {memoizedActionsArr.length > 0 && <BlockActionsList arr={memoizedActionsArr} />}
            {ActionsComp && <ActionsComp />}
          </>
        )}
      </BlockModalPortal> */}
    </>
  );
};

export default BlockActions;
