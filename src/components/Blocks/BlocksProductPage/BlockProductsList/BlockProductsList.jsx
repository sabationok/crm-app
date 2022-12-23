import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/BlockTable';
import Actions from './Actions/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionDeletePost as actionDelete, actionChangePostVisibility, actionApprovePost, actionRejectPost } from 'redux/posts/postsActions';
import { postsMessages as messages } from '../postsMessages';
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
  function changeVisibilityAction(id) {
    const { NOT_SELECTED_ID, VISIBILITY_CHANGED, VISIBILITY_ERROR } = messages;
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
    dispatch(actionChangePostVisibility(payload));
  }
  function approvePostAction(id) {
    const { APPROVED, STATUS_ERROR } = messages;
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
    const { REJECTED, STATUS_ERROR } = messages;
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
    ActionsComp: Actions,
    prepeareRowData: prepareProductData,
    deleteAction,
    changeVisibilityAction,
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
