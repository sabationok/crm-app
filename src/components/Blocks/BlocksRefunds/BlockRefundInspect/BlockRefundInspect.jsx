import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
import RefundInspection from 'components/TableRefundInspection/RefundInspection';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPageObjData } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockRefundInspect.module.scss';

const BlockRefundInspect = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refund = useSelector(getPageObjData);

  const blockSettings = {
    className: s[pageGrid],
    // prepareRowData: prepeareProductData,
    // prepareSubmitData: prepeareProductSubmitData,
    // deleteAction,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      {refund?._id && <RefundInspection />}

      {!refund?._id && <BlockEmpty title="Оберіть повернення зі списку" />}
    </Block>
  );
};

export default BlockRefundInspect;
