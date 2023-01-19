import React from 'react';
import ActionPrimary from './ActionPrimary';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/FormProductImgs/FormProductImgs';
import FormProductStock from 'components/Forms/FormProductStock/FormProductStock';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './Action.module.scss';

const ActionEdit = ({ action, props, type = 'product', iconId = 'edit', blockProps, modalProps, title = 'Редагування', ...others }) => {
  const pageDataObj = useSelector(getPageObjData);

  const ActionMap = {
    product: props => <FormProductInfo edit {...props} />,
    productImgs: props => <FormProductImgs edit {...props} />,
    stock: props => <FormProductStock edit {...props} />,
    order: () => <div>{props?.id}</div>,
    refund: () => <div>{props?.id}</div>,
    realization: () => <div>{props?.id}</div>,
  };
  let Children = ActionMap[type];

  const blockSettings = {
    title,
    iconId,
    className: s.modalBlock,
    headerClassName: s.modalHeader,
    ...blockProps,
  };

  return (
    <>
      <ModalContent trigger={props => <ActionPrimary title={title} iconId={iconId} {...action} status={!!pageDataObj} {...props} />}>
        {ActionMap[type] && <Children {...props} blockSettings={blockSettings} />}
      </ModalContent>
    </>
  );
};

export default ActionEdit;
