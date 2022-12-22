import React from 'react';

import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

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
          <BlockSimple title="Створення повернення" iconId="return" className={s.modalBlock} headerClassName={s.modalHeader}></BlockSimple>
        }
      >
        <ActionPrimary iconId="return" title="Створити повернення" />
      </ModalOpenLink>

      <ActionPrimary
        iconId="delete"
        title="Видалити"
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          const response = confirm('Ви дійсно бажаєте видалити замовлення?');
          if (!response) {
            toast.info('Видалення відхилено');
            return;
          }
          toast.success('Замолвення видалено');
        }}
      />
    </>
  );
};

export default Actions;
