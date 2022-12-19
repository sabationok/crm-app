import React from 'react';

import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import s from './Actions.module.scss';

const Actions = () => {
  const { id } = useParams();
  return (
    <>
      <ModalOpenLink
        modalContent={
          <BlockSimple title="Редагування товару" iconId="edit" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo edit id={id} />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="edit" title="Змінити" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Керувати зображеннями" iconId="gallery" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductImgs id={id} />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="gallery" title="Редагувати зображення" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення товару" iconId="plus" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo create />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="plus" title="Створити новий" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Копія товару" iconId="copy" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo copy id={id} />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="copy" title="Створити копію" />
      </ModalOpenLink>

      <ActionPrimary
        iconId="delete"
        title="Видалити"
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          const response = confirm('Ви дійсно бажаєте видалити товар?');
          if (!response) {
            toast.info('Видалення відхилено');
            return;
          }
          toast.success('Товар видалено');
        }}
      />
    </>
  );
};

export default Actions;
