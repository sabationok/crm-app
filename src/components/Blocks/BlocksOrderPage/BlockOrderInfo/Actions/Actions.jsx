import React from 'react';

import ActionCreate from 'components/Block/BlockActions/Actions/ActionCreate';
import ActionEdit from 'components/Block/BlockActions/Actions/ActionEdit';
import { useParams } from 'react-router-dom';

// import s from './Actions.module.scss';

const Actions = () => {
  const { id = 'Параметр відсутній' } = useParams();

  return (
    <>
      <ActionCreate type="order" props={{ id: id }} title="Створення замовлення" />

      <ActionEdit type="order" props={{ id: id }} title="Редагування замовлення" />

      <ActionCreate type="refund" props={{ id: id }} action={{ status: !id }} iconId="refund" title="Створення повернення" />

      <ActionCreate type="realization" props={{ id: id }} action={{ status: !id }} iconId="assignment-ok" title="Створення реалізації" />
    </>
  );
};

export default Actions;
