import React from 'react';
import Block from 'components/Block/Block';
import FormPrimary from 'components/Forms/FormPrimary/FormPrimary';
import RefundInfo from 'components/TableRefundInfo/RefundInfo';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPageObjData } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockRefundInfo.module.scss';

const BlockRefundInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refund = useSelector(getPageObjData);

  function deleteAction(id) {
    if (!id) {
      // NOT_SELECTED_ID(id);
      return;
    }
    const confirm = window.confirm('Deleting.confirm(id)');
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        // toast.success(Deleting.success(id));
        navigate(`/refunds`);
      },
      onError: () => {
        // toast.error(Deleting.error(id));
      },
    };
    // dispatch(actionDelete(payload));
  }

  const blockSettings = {
    className: s[pageGrid],
    // prepareRowData: prepeareProductData,
    // prepareSubmitData: prepeareProductSubmitData,
    // deleteAction,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      {refund?._id && <RefundInfo />}

      {!refund?._id && <BlockEmpty title="Оберіть повернення зі списку" />}
    </Block>
  );
};

export default BlockRefundInfo;
