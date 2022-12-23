import React from 'react';
import Block from 'components/Block/Block';
import TopInfo from './TopInfo/TopInfo';
import TableProductInfo from './TableProductInfo/TableProductInfo';
import TableProductImgs from './TableProductImgs/TableProductImgs';
import Actions from './Actions/Actions';
import BlockEmpty from '../../BlockEmpty/BlockEmpty';
import { getAppPageSettings, getPosts } from 'redux/selectors';
import { prepareProductData, prepareProductSubmitData } from 'data/productsFormData';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { actionDeletePost as actionDelete } from 'redux/posts/postsActions';
import { postsMessages as deleteMessages } from '../postsMessages';

import s from './BlockProductInfo.module.scss';

const BlockProductInfo = props => {
  const { id } = useParams();
  const { posts } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPost = posts.find(post => post._id === id);

  function deleteAction(id) {
    const { NOT_SELECTED_ID, DELETE_CONFIRM, DELETE_DECLINE, DELETE_SUCCESS, DELETE_ERROR } = deleteMessages;
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

  const blockSettings = {
    title: 'Деталі',
    iconId: 'info',
    actions: 'primary',
    className: s[pageGrid],
    ActionsComp: Actions,
    prepareRowData: prepareProductData,
    prepareSubmitData: prepareProductSubmitData,
    deleteAction,
    post: selectedPost,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      {selectedPost?._id && <TopInfo />}

      {!selectedPost?._id && <BlockEmpty title="Оберіть пост зі списку" />}

      <TableProductInfo></TableProductInfo>

      <TableProductImgs></TableProductImgs>
    </Block>
  );
};
export default BlockProductInfo;
