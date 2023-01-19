import React from 'react';
import ActionPrimary from './ActionPrimary';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormOrderCreate from 'components/Forms/FormOrderCreate/FormOrderCreate';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';

import s from './Action.module.scss';

const ActionCreate = ({ action, props, type = 'product', iconId = 'plus', title = 'Створення' }) => {
  const ActionMap = {
    product: props => <FormProductInfo {...props} create />,
    order: props => <FormOrderCreate {...props} />,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
    delivery: () => <div>{props?.id}</div>,
  };
  let Children = ActionMap[type];

  const blockSettings = {
    title,
    iconId,
    className: s.modalBlock,
    headerClassName: s.modalHeader,
  };

  return (
    <>
      <ModalContent trigger={props => <ActionPrimary title={title} iconId={iconId} {...action} {...props} />}>
        {ActionMap[type] && <Children {...props} blockSettings={blockSettings} />}
      </ModalContent>
    </>
  );
};

export default ActionCreate;
