import React from 'react';

// import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';

import SvgIcon from 'components/SvgIcon/SvgIcon';

// import { useBlock } from 'components/Block/BlockContext';

import s from './Actions.module.scss';

const Actions = () => {
  return (
    <div className={s.buttons}>
      <ModalOpenLink
        modalContent={
          <BlockSimple title="Редагування товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo edit />
          </BlockSimple>
        }
      >
        <SvgIcon size="24px" iconId="edit" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Керувати зображеннями" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductImgs />
          </BlockSimple>
        }
      >
        <SvgIcon size="24px" iconId="gallery" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo create />
          </BlockSimple>
        }
      >
        <SvgIcon size="24px" iconId="plus" />
      </ModalOpenLink>

      <ModalOpenLink
        modalContent={
          <BlockSimple title="Створення товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo create />
          </BlockSimple>
        }
      >
        <SvgIcon size="24px" iconId="copy" />
      </ModalOpenLink>

      <ButtonIcon iconId="delete" iconSize="24px" styles={{ padding: 0, borderStyle: 'none' }} />
    </div>
  );
};

export default Actions;
