import React from 'react';
import ActionPrimary from './ActionPrimary';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

import s from './Action.module.scss';

const ActionCopy = ({ action, props, type = 'product', iconId = 'copy', title = 'Копіювання' }) => {
  const pageDataObj = useSelector(getPageObjData);
  const ActionMap = {
    product: props => <FormProductInfo {...props} copy />,
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
  };

  return (
    <>
      <ModalContent trigger={props => <ActionPrimary title={title} iconId={iconId} {...action} status={!!pageDataObj} {...props} />}>
        {ActionMap[type] && <Children {...props} blockSettings={blockSettings} />}
      </ModalContent>
    </>
  );
};

export default ActionCopy;
