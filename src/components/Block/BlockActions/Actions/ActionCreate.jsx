import React from 'react';
import ActionPrimary from './ActionPrimary';
import ModalOpenTrigger from 'components/ModalCustom/ModalOpenTrigger/ModalOpenTrigger';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';

import s from './Action.module.scss';

const ActionCreate = ({ action, props, type = 'product', iconId = 'plus', title = 'Створення' }) => {
  const ActionMap = {
    product: props => <FormProductInfo {...props} create />,
    order: () => <div>{props?.id}</div>,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
  };
  let Children = ActionMap[type];

  return (
    <ModalOpenTrigger
      trigger={props => <ActionPrimary title={title} iconId={iconId} {...action} {...props} />}
      modalContent={
        <BlockSimple title={title} iconId={iconId} className={s.modalBlock} headerClassName={s.modalHeader}>
          {ActionMap[type] && <Children {...props} />}
        </BlockSimple>
      }
    />
  );
};

export default ActionCreate;
