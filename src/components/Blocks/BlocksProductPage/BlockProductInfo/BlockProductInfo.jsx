import React from 'react';
import Block from 'components/Block/Block';
import TopInfo from './TopInfo/TopInfo';
import Actions from './Actions/Actions';
import BlockEmpty from '../../BlockEmpty/BlockEmpty';
import { getAppPageSettings, getPosts } from 'redux/selectors';
import { prepareProductData, prepareProductSubmitData } from 'data/productsFormData';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { actionDeletePost as actionDelete } from 'redux/posts/postsActions';
import { postsMessages as messages } from 'data';

import s from './BlockProductInfo.module.scss';
import { toast } from 'react-toastify';

const BlockProductInfo = props => {
  const { id } = useParams();
  const { posts } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPost = posts.find(post => post._id === id);

  function deleteAction(id) {
    const { NOT_SELECTED_ID, Deleting } = messages;
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
    </Block>
  );
};
export default BlockProductInfo;
