import Block from 'components/Block/Block';
import FormAuth from 'components/Forms/FormAuth/FormAuth';
import ModalContent from 'components/ModalCustom/ModalContent/ModalContent';
import { Button } from '@mui/material';

import s from './BlockUsers.module.scss';

const BlockUsers = props => {
  const blockSettings = { className: s.gridFirst, ...props };

  return (
    <Block {...blockSettings}>
      <div className={s.BlockUsers}>
        <ModalContent
          trigger={props => (
            <Button variant="outlined" {...props}>
              Створити користувача
            </Button>
          )}
        >
          <FormAuth {...{ blockSettings: { iconId: 'plus', title: 'Створити користувача' }, signUp: true, admin: true }} />
        </ModalContent>

        <ModalContent
          trigger={props => (
            <Button variant="outlined" {...props}>
              Список користувачів
            </Button>
          )}
        ></ModalContent>
      </div>
    </Block>
  );
};

export default BlockUsers;
