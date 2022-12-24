import React from 'react';
import ActionPrimary from './ActionPrimary';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';

import s from './Action.module.scss';

const ActionEdit = ({ action, props, type = 'product', iconId = 'edit', blockProps, modalProps, title = 'Редагування' }) => {
  const ActionMap = {
    product: props => <FormProductInfo edit {...props} />,
    productImgs: props => <FormProductImgs edit {...props} />,
    stock: props => <FormProductStock edit {...props} />,
    order: () => <div>{props?.id}</div>,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
  };
  let Children = ActionMap[type];
  return (
    <ModalOpenLink
      {...modalProps}
      modalContent={
        <BlockSimple title={title} iconId={iconId} className={s.modalBlock} headerClassName={s.modalHeader} {...blockProps}>
          {ActionMap[type] && <Children {...props} />}
        </BlockSimple>
      }
    >
      <ActionPrimary title={title} iconId={iconId} {...action} />
    </ModalOpenLink>
  );
};

export default ActionEdit;
