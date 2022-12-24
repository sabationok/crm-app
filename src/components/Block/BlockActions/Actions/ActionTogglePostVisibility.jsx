import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionTogglePostVisibility } from 'redux/posts/postsActions';
import { postsMessages as messages } from 'components/Block/blockActions';
import { useBlock } from 'components/Block/BlockContext';

const ActionTogglePostVisibility = ({ action }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post } = useBlock();

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
  // function approvePostAction(id) {
  //   const { APPROVED, STATUS_ERROR } = messages;
  //   const payload = {
  //     data: { _id: id },
  //     onSuccess: () => {
  //       APPROVED(id);
  //     },
  //     onError: () => {
  //       STATUS_ERROR(id);
  //     },
  //   };
  //   dispatch(actionApprovePost(payload));
  // }
  // function rejectPostAction(id) {
  //   const { REJECTED, STATUS_ERROR } = messages;
  //   const payload = {
  //     data: { _id: id },
  //     onSuccess: () => {
  //       REJECTED(id);
  //     },
  //     onError: () => {
  //       STATUS_ERROR(id);
  //     },
  //   };
  //   dispatch(actionRejectPost(payload));
  // }
  return (
    <ActionPrimary
      onClick={() => {
        togglePostVisibility(id);
      }}
      iconId={post.visibilityStatus ? 'visibility-on' : 'visibility-off'}
      {...action}
    />
  );
};

export default ActionTogglePostVisibility;
