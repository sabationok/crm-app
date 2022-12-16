import React from 'react';

import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';

import s from './Actions.module.scss';

const Actions = () => {
  return (
    <>
      <ModalOpenLink
        modalContent={
          <BlockSimple title="Редагування товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo edit />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="edit" title="Змінити" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Керувати зображеннями" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductImgs />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="gallery" title="Редагувати зображення" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo create />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="plus" title="Створити новий" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo create />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="copy" title="Створити копію" />
      </ModalOpenLink>

      <ActionPrimary iconId="delete" title="Видалити" />
    </>
  );
};

export default Actions;
