import React from 'react';
import ActionPrimary from './ActionPrimary';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';

import s from './Action.module.scss';

const ActionCopy = ({ action, props, type = 'product', iconId = 'copy', title = 'Копіювання' }) => {
  const ActionMap = {
    product: props => <FormProductInfo {...props} copy />,
    order: () => <div>{props?.id}</div>,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
  };
  let Children = ActionMap[type];
  return (
    <ModalOpenLink
      modalContent={
        <BlockSimple title={title} iconId={iconId} className={s.modalBlock} headerClassName={s.modalHeader}>
          {ActionMap[type] && <Children {...props} />}
        </BlockSimple>
      }
    >
      <ActionPrimary title={title} iconId={iconId} {...action} />
    </ModalOpenLink>
  );
};

export default ActionCopy;
