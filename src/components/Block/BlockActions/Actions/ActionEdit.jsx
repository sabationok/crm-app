import React from 'react';
import ActionPrimary from './ActionPrimary';
import ModalOpenTrigger from 'components/ModalCustom/ModalOpenTrigger/ModalOpenTrigger';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
import { useParams } from 'react-router-dom';

import s from './Action.module.scss';

const ActionEdit = ({ action, props, type = 'product', iconId = 'edit', blockProps, modalProps, title = 'Редагування' }) => {
  const { id } = useParams();
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
    <ModalOpenTrigger
      trigger={props => <ActionPrimary title={title} iconId={iconId} {...action} status={!!id} {...props} />}
      {...modalProps}
      modalContent={
        <BlockSimple title={title} iconId={iconId} className={s.modalBlock} headerClassName={s.modalHeader} {...blockProps}>
          {ActionMap[type] && <Children {...props} />}
        </BlockSimple>
      }
    />
  );
};

export default ActionEdit;
