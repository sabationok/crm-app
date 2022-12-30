import React from 'react';
import Block from 'components/Block/Block';
import TableProductInfo from 'components/TableProductInfo/TableProductInfo';
import BlockEmpty from '../../BlockEmpty/BlockEmpty';
import { postsMessages as messages } from 'data';
import { getAppPageSettings } from 'redux/selectors';
import { prepeareProductData, prepeareProductSubmitData } from 'data/products';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePage } from 'components/AppPages/PageProvider';
import { actionDeletePost as actionDelete } from 'redux/posts/postsActions';
import { toast } from 'react-toastify';

import s from './BlockProductInfo.module.scss';

const BlockProductInfo = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = usePage();

  const { NOT_SELECTED_ID, Deleting } = messages;

  function deleteAction(id) {
    if (!id) {
      NOT_SELECTED_ID(id);
      return;
    }
    const confirm = window.confirm(Deleting.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.success(Deleting.success(id));
        navigate(`/products`);
      },
      onError: () => {
        toast.error(Deleting.error(id));
      },
    };
    dispatch(actionDelete(payload));
  }
  const blockSettings = {
    className: s[pageGrid],
    prepareRowData: prepeareProductData,
    prepareSubmitData: prepeareProductSubmitData,
    deleteAction,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      {page.post?._id && <TableProductInfo />}

      {!page.post?._id && <BlockEmpty title="Оберіть пост зі списку" />}
    </Block>
  );
};
export default BlockProductInfo;
