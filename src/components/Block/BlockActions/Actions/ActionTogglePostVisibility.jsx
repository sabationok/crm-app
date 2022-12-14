import React from 'react';
import ActionPrimary from './ActionPrimary';
import { useDispatch } from 'react-redux';
import { actionTogglePostVisibility } from 'redux/posts/postsActions';
import { postsMessages as messages } from 'data';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getPageObjData } from 'redux/selectors';

const ActionTogglePostVisibility = ({ action }) => {
  const pageDataObj = useSelector(getPageObjData);
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
        togglePostVisibility(pageDataObj?._id);
      }}
      iconId={pageDataObj?.visibilityStatus ? 'visibility-on' : 'visibility-off'}
      {...action}
      status={!!pageDataObj}
    />
  );
};

export default ActionTogglePostVisibility;
