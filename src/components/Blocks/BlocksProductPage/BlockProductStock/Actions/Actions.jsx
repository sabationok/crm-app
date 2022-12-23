import React from 'react';

import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
import ActionPrimary from 'components/Block/BlockActions/Actions/ActionPrimary';

import { useParams } from 'react-router-dom';

import s from './Actions.module.scss';

const Actions = () => {
  const { id } = useParams();
  return (
    <>
      <ModalOpenLink
        modalContent={
          <BlockSimple
            title="Керувати складськими залишками"
            iconId="edit"
            className={s.modalBlock}
            headerClassName={s.modalHeader}
            style={{ width: '95vw' }}
          >
            <FormProductStock edit id={id} />
          </BlockSimple>
        }
      >
        <ActionPrimary iconId="edit" title="Змінити" />
      </ModalOpenLink>
    </>
  );
};

export default Actions;
