import React from 'react';

import ActionEdit from 'components/Block/BlockActions/Actions/ActionEdit';

import { useParams } from 'react-router-dom';

// import s from './Actions.module.scss';

const Actions = () => {
  const { id } = useParams();
  return (
    <>
      <ActionEdit type="stock" props={{ id }} title="Керувати складськими залишками" blockProps={{ style: { width: '95vw' } }} />
    </>
  );
};

export default Actions;
