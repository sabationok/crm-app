import React from 'react';

import ActionEdit from 'components/Block/BlockActions/Actions/ActionEdit';
import { useParams } from 'react-router-dom';

// import s from './Actions.module.scss';

const Actions = () => {
  const { id = 'Параметр відсутній' } = useParams();
  return (
    <>
      <ActionEdit type="realization" props={{ id }} title="Редагувати реалізації" />
    </>
  );
};

export default Actions;
