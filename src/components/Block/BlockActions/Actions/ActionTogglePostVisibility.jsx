import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useDispatch } from 'react-redux';
import { actionTogglePostVisibility } from 'redux/posts/postsActions';
import { postsMessages as messages } from 'data';
import { useBlock } from 'components/Block/BlockContext';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ActionTogglePostVisibility = ({ action }) => {
  const { post } = useBlock();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Visibility, NOT_SELECTED_ID } = messages;

  function togglePostVisibility(id) {
    const confirm = window.confirm(Visibility.confirm(id));
    if (!id) {
      NOT_SELECTED_ID();
      return;
    }
    if (!confirm) {
      return;
    }
    const payload = {
      data: { _id: id },
      onSuccess: () => {
        toast.success(`${Visibility.changed(id)}`);
      },
      onError: () => {
        toast.error(Visibility.error(id));
      },
    };
    dispatch(actionTogglePostVisibility(payload));
  }

  return (
    <ActionPrimary
      onClick={() => {
        togglePostVisibility(post._id);
      }}
      iconId={post?.visibilityStatus ? 'visibility-on' : 'visibility-off'}
      {...action}
      status={!!id}
    />
  );
};

export default ActionTogglePostVisibility;
