import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import FormPrimary from '../FormPrimary/FormPrimary';
import { useDispatch } from 'react-redux';
import { userRegister, userLogIn, userRegisterByAdmin } from 'redux/auth/authThunks';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './FormAuth.module.scss';

const initialState = { email: null, password: null };
const messages = key => {
  const msgs = {
    SIGNIN_OK: 'Вітаю у системі',
    REG_OK: 'Користувача успішно зареєстровано',
    400: 'Не вірні дані',
    401: 'Не авторизований користувач',
    409: 'Такий користувач уже існує',
  };
  return msgs[key];
};
const FormAuth = props => {
  const dispatch = useDispatch();
  const { signUp = false, signIn = false, admin = false } = props;
  const [formData, setFormData] = useState(initialState);

  function onChange(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function signInUser(ev) {
    const payload = {
      submitData: { email: formData.email, password: formData.password },

      onSuccess: data => {
        toast.success(messages('SIGNIN_OK'));
      },
      onError: error => {
        const { statusCode } = error?.response?.data;
        toast.error(messages(statusCode));
      },
    };

    dispatch(userLogIn(payload));
  }
  function signUpUser(ev) {
    const payload = {
      submitData: { email: formData.email, password: formData.password },
      onSuccess: data => {
        toast.success(messages('REG_OK'));
      },
      onError: error => {
        const { statusCode } = error?.response?.data;

        toast.error(messages(statusCode));
      },
    };
    dispatch(userRegister(payload));
  }
  function createUserByAdmin(ev) {
    const payload = {
      submitData: { email: formData.email, password: formData.password },
      onSuccess: data => {
        toast.success(messages('REG_OK'));
      },
      onError: error => {
        const { statusCode } = error?.response?.data;

        toast.error(messages(statusCode));
      },
    };
    dispatch(userRegisterByAdmin(payload));
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();

    if (signUp && admin) {
      createUserByAdmin();
      return;
    }
    if (signUp && !admin) {
      signUpUser();
      return;
    }
    if (signIn) {
      signInUser();
      return;
    }
    setFormData(initialState);
  }

  const formSettings = {
    onSubmit: handleFormSubmit,
    className: s.FormAuth,
    ...props,
  };

  return (
    <FormPrimary {...formSettings}>
      <PrimaryInput label="Емейл" name="email" type="email" required onChange={onChange} />

      <PrimaryInput label="Пароль" name="password" type="password" required onChange={onChange} />

      <Button variant="contained" type="submit">
        {admin && <span>Створити користувача</span>}

        {!admin && <span>{signUp ? 'Реєстрація' : 'Увійти'}</span>}
      </Button>

      {!admin && (
        <Button variant="text">
          <Link to={signUp ? '/auth/signIn' : '/auth/signUp'} className={s.link}>
            <span>{signUp ? 'Увійти' : 'Зареєструватись'}</span>
          </Link>
        </Button>
      )}
    </FormPrimary>
  );
};

export default FormAuth;
