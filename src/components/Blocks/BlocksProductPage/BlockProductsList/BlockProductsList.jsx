import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/TableList';
import { postsMessages as messages } from 'data';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionDeletePost, actionTogglePostVisibility, actionApprovePost, actionRejectPost, actionArchivePost } from 'redux/posts/postsActions';
import { getAppPageSettings, getPosts } from 'redux/selectors';
import { productsTableTitles } from 'data/productsTableTitles';
import { prepeareProductData } from 'data/products';
import { toast } from 'react-toastify';

import s from './BlockProductsList.module.scss';
const BlockProductsList = props => {
  const { posts } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { NOT_SELECTED_ID, Deleting, Visibility, Approving, Rejecting, Archivating } = messages;

  function deleteAction(id) {
    const confirm = window.confirm(Deleting.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.success(Deleting.success(id));
        Deleting.success(id);
        navigate(`/products`);
      },
      onError: () => {
        toast.error(Deleting.error(id));
      },
    };
    dispatch(actionDeletePost(payload));
  }
  function archivePostAction(id) {
    const confirm = window.confirm(Archivating.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.success(Archivating.success(id));
        navigate(`/products`);
      },
      onError: () => {
        toast.error(Archivating.error(id));
      },
    };
    dispatch(actionArchivePost(payload));
  }
  function togglePostVisibility(id) {
    const confirm = window.confirm(Visibility.confirm(id));
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
        toast.success(Visibility.changed(id));
      },
      onError: () => {
        toast.error(Visibility.error(id));
      },
    };
    dispatch(actionTogglePostVisibility(payload));
  }
  function approvePostAction(id) {
    const confirm = window.confirm(Approving.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.error(Approving.success(id));
      },
      onError: () => {
        toast.error(Approving.error(id));
      },
    };
    dispatch(actionApprovePost(payload));
  }
  function rejectPostAction(id) {
    const confirm = window.confirm(Rejecting.confirm(id));
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.error(Rejecting.success(id));
      },
      onError: () => {
        toast.error(Rejecting.error(id));
      },
    };
    dispatch(actionRejectPost(payload));
  }

  const blockSettings = {
    className: s[pageGrid],
    tableData: posts,
    tableTitles: productsTableTitles,
    prepeareRowData: prepeareProductData,
    togglePostVisibility,
    deleteAction,
    approvePostAction,
    rejectPostAction,
    archivePostAction,
    ...props,
  };
  return (
    <Block {...blockSettings}>
      <TableList />
    </Block>
  );
};

export default BlockProductsList;
