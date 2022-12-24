import React from 'react';

import ActionEdit from 'components/Block/BlockActions/Actions/ActionEdit';
import ActionCreate from 'components/Block/BlockActions/Actions/ActionCreate';
import { useParams } from 'react-router-dom';

// import s from './Actions.module.scss';

const Actions = () => {
  const { id = 'Параметр відсутній' } = useParams();
  return (
    <>
      <ActionCreate type="realization" iconId="assignment-ok" title="Створення реалізації" />

      <ActionEdit type="realization" props={{ id }} title="Редагувати реалізації" />
    </>
  );
};

export default Actions;
