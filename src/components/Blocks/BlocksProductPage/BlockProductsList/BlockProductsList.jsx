import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/BlockTable';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionDeletePost as actionDelete, actionTogglePostVisibility, actionApprovePost, actionRejectPost } from 'redux/posts/postsActions';
import { postsMessages as messages } from '../../../../data/postsMessages';
import { getAppPageSettings, getPosts } from 'redux/selectors';
import { productsTableTitles } from 'data/productsTableTitles';
import { prepareProductData } from 'data/productsFormData';

import s from './BlockProductsList.module.scss';
const BlockProductsList = props => {
  const { posts } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function deleteAction(id) {
    const { NOT_SELECTED_ID, DELETE_CONFIRM, DELETE_DECLINE, DELETE_SUCCESS, DELETE_ERROR } = messages;
    if (!id) {
      NOT_SELECTED_ID();
      return;
    }
    const confirm = window.confirm(DELETE_CONFIRM(id));
    if (!confirm) {
      DELETE_DECLINE(id);
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        DELETE_SUCCESS(id);
        navigate(`/products`);
      },
      onError: () => {
        DELETE_ERROR(id);
      },
    };
    dispatch(actionDelete(payload));
  }
  function togglePostVisibility(id) {
    const { VISIBILITY_CONFIRM, NOT_SELECTED_ID, VISIBILITY_CHANGED, VISIBILITY_ERROR } = messages;
    const confirm = window.confirm(VISIBILITY_CONFIRM(id));
    if (!confirm) {
      return;
    }
    if (!id) {
      NOT_SELECTED_ID();
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        VISIBILITY_CHANGED(id);
      },
      onError: () => {
        VISIBILITY_ERROR(id);
      },
    };
    dispatch(actionTogglePostVisibility(payload));
  }
  function approvePostAction(id) {
    const { APPROVED, STATUS_ERROR, APPROVED_CONFIRM } = messages;
    const confirm = window.confirm(APPROVED_CONFIRM(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        APPROVED(id);
      },
      onError: () => {
        STATUS_ERROR(id);
      },
    };
    dispatch(actionApprovePost(payload));
  }
  function rejectPostAction(id) {
    const { REJECTED, STATUS_ERROR, REJECTED_CONFIRM } = messages;
    const confirm = window.confirm(REJECTED_CONFIRM(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        REJECTED(id);
      },
      onError: () => {
        STATUS_ERROR(id);
      },
    };
    dispatch(actionRejectPost(payload));
  }
  const blockSettings = {
    title: 'Список товарів',
    iconId: 'list',
    actions: 'withFilter',
    className: s[pageGrid],
    tableData: [...posts],
    tableTitles: productsTableTitles,
    prepeareRowData: prepareProductData,
    deleteAction,
    togglePostVisibility,
    approvePostAction,
    rejectPostAction,
    ...props,
  };
  return (
    <Block {...blockSettings}>
      <TableList />
    </Block>
  );
};

export default BlockProductsList;
