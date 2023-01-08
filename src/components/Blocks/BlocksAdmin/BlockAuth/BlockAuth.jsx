import { Button } from '@mui/material';
import Block from 'components/Block/Block';
import FormAuth from 'components/Forms/FormAuth/FormAuth';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';

import s from './BlockAuth.module.scss';

const BlockAuth = props => {
  const blockSettings = { className: s.gridFirst, ...props };

  return (
    <Block {...blockSettings}>
      <div className={s.BlockAuth}>
        <ModalContent trigger={props => <Button {...props}>Створити користувача</Button>}>
          <FormAuth {...{ blockSettings: { iconId: 'plus', title: 'Створити користувача' }, signUp: true, admin: true }} />
        </ModalContent>
      </div>
    </Block>
  );
};

export default BlockAuth;
