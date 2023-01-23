import React from 'react';
import Block from 'components/Block/Block';
import RefundInfo from 'components/TableRefundInfo/RefundItemInfo';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPageObjData } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';
import { toast } from 'react-toastify';
import { refundsMessages as messages } from 'data';

import s from './BlockRefundInfo.module.scss';

const BlockRefundInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const refund = useSelector(getPageObjData);

  const { NOT_SELECTED_ID, Deleting } = messages;
  function deleteAction(id) {
    if (!id) {
      NOT_SELECTED_ID(id);
      return;
    }
    const confirm = window.confirm('Deleting.confirm(id)');
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.success(Deleting.success(id));
        navigate(`/refunds`);
      },
      onError: () => {
        toast.error(Deleting.error(id));
      },
    };

    payload.onSuccess();
    // dispatch(actionDelete(payload));
  }

  const blockSettings = {
    className: s[pageGrid],
    // prepareRowData: prepeareProductData,
    // prepareSubmitData: prepeareProductSubmitData,
    deleteAction,
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
