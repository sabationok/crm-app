import React from 'react';
import ActionPrimary from './ActionPrimary';
import ModalOpenTrigger from 'components/ModalCustom/ModalOpenTrigger/ModalOpenTrigger';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import { useParams } from 'react-router-dom';
import s from './Action.module.scss';

const ActionCopy = ({ action, props, type = 'product', iconId = 'copy', title = 'Копіювання' }) => {
  const { id } = useParams();
  const ActionMap = {
    product: props => <FormProductInfo {...props} copy />,
    order: () => <div>{props?.id}</div>,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
  };
  let Children = ActionMap[type];
  return (
    <ModalOpenTrigger
      trigger={props => <ActionPrimary title={title} iconId={iconId} {...action} status={!!id} {...props} />}
      disabled={!id}
      modalContent={
        <BlockSimple title={title} iconId={iconId} className={s.modalBlock} headerClassName={s.modalHeader}>
          {ActionMap[type] && <Children {...props} />}
        </BlockSimple>
      }
    />
  );
};

export default ActionCopy;
