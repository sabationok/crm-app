import React from 'react';
import ActionPrimary from './ActionPrimary';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormOrderCreate from 'components/Forms/FormOrderCreate/FormOrderCreate';
// import { useModal } from 'components/Modal/ModalComponent';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';

import s from './Action.module.scss';

const ActionCreate = ({ action, props, type = 'product', iconId = 'plus', title = 'Створення' }) => {
  // const { handleToggleModal } = useModal();

  const blockSettings = {
    title,
    iconId,
    className: s.modalBlock,
    headerClassName: s.modalHeader,
  };

  const ActionMap = {
    product: props => <FormProductInfo {...props} create />,
    order: props => <FormOrderCreate {...props} create />,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
    delivery: () => <div>{props?.id}</div>,
  };

  let Children = ActionMap[type] ?? null;

  return (
    <>
      {/* <ActionPrimary
        title={title}
        iconId={iconId}
        {...action}
        onClick={ev => handleToggleModal(ev, <Children {...props} blockSettings={blockSettings} />)}
      /> */}
      <ModalContent
        trigger={props => (
          <ActionPrimary
            {...{
              title,
              iconId,
              ...action,
              ...props,
            }}
          />
        )}
      >
        {ActionMap[type] && <Children {...props} blockSettings={blockSettings} />}
      </ModalContent>
    </>
  );
};

export default ActionCreate;
