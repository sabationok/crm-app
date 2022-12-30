import React from 'react';

import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';
import { useParams } from 'react-router-dom';

import s from './Actions.module.scss';

const Actions = () => {
  const { id = 'Параметр відсутній' } = useParams();
  return (
    <>
      <ModalContent trigger={props => <ActionPrimary iconId="edit" title="Змінити" {...props} />}>
        <BlockSimple title="Редагувати ТТН" iconId="edit" className={s.modalBlock} headerClassName={s.modalHeader}>
          <span>{id}</span>
        </BlockSimple>
      </ModalContent>
    </>
  );
};

export default Actions;
