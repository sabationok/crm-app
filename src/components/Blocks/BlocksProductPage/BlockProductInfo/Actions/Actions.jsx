import React from 'react';

import ActionCreate from 'components/Block/BlockActions/Actions/ActionCreate';
import ActionEdit from 'components/Block/BlockActions/Actions/ActionEdit';
import ActionCopy from 'components/Block/BlockActions/Actions/ActionCopy';

import ActionTogglePostVisibility from 'components/Block/BlockActions/Actions/ActionTogglePostVisibility';

import { useParams } from 'react-router-dom';

// import s from './Actions.module.scss';

const Actions = () => {
  const { id } = useParams();
  return (
    <>
      <ActionCreate type="product" props={{ id: id }} title="Створення продукту" />

      <ActionEdit type="product" props={{ id: id }} title="Редагування продукту" />

      <ActionCopy type="product" props={{ id: id }} title="Копіювати продукт" />

      <ActionEdit type="productImgs" props={{ id: id }} iconId="gallery" title="Керувати зображеннями" />

      <ActionTogglePostVisibility />
    </>
  );
};

export default Actions;
