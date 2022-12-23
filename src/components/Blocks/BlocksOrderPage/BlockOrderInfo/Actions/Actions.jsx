import React from 'react';

import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';
import { useParams } from 'react-router-dom';

import s from './Actions.module.scss';

const Actions = () => {
  const { id = 'Апарметр відсутній' } = useParams();
  console.log(id);
  return (
    <>
      <ModalOpenLink
        modalContent={
          <BlockSimple title="Редагування замовлення" iconId="edit" className={s.modalBlock} headerClassName={s.modalHeader}></BlockSimple>
        }
      >
        <ActionPrimary iconId="edit" title="Змінити" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={<BlockSimple title="Створення замовлення" iconId="plus" className={s.modalBlock} headerClassName={s.modalHeader}></BlockSimple>}
      >
        <ActionPrimary iconId="plus" title="Створити" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення повернення" iconId="refund" className={s.modalBlock} headerClassName={s.modalHeader}></BlockSimple>
        }
      >
        <ActionPrimary iconId="refund" title="Створити повернення" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення інвойс" iconId="assignment" className={s.modalBlock} headerClassName={s.modalHeader}></BlockSimple>
        }
      >
        <ActionPrimary iconId="assignment" title="Створити інвойс" />
      </ModalOpenLink>
    </>
  );
};

export default Actions;
