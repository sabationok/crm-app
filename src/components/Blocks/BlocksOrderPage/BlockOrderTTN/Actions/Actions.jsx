import React from 'react';

import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';
import { useParams } from 'react-router-dom';

import s from './Actions.module.scss';

const Actions = () => {
  const { id = 'Параметр відсутній' } = useParams();
  return (
    <>
      <ModalOpenLink
        modalContent={
          <BlockSimple title="Редагувати ТТН" iconId="edit" className={s.modalBlock} headerClassName={s.modalHeader}>
            <span>{id}</span>
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="edit" title="Змінити" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={<BlockSimple title="Створення замовлення" iconId="plus" className={s.modalBlock} headerClassName={s.modalHeader}></BlockSimple>}
      >
        <ActionPrimary iconId="plus" title="Створити" />
      </ModalOpenLink>
    </>
  );
};

export default Actions;
