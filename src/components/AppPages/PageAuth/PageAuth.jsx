import { useState } from 'react';
import PropTypes from 'prop-types';

import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import { useDispatch } from 'react-redux';
import { actionLogInUser } from 'redux/auth/authActions';

import { Button } from '@mui/material';

import s from './PageAuth.module.scss';
import { toast } from 'react-toastify';

const PageAuth = props => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ login: null, password: null });

  function onChange(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function loginUser(ev) {
    ev.preventDefault();

    const submitData = {
      data: { login: formData.login, password: formData.password },
      onSuccess: () => {
        toast.success('Вітаю у системі');
      },
      onError: code => {
        if (code === 400) {
          toast.error('Не авторизований користувач');
          return;
        }
        if (code === 404) {
          toast.error('Не вірні дані');
          return;
        }
      },
    };

    dispatch(actionLogInUser(submitData));
  }
  return (
    <div className={s.pageAuth} onSubmit={loginUser}>
      <form className={s.formAuth}>
        <PrimaryInput label="Логін або емейл" name="login" required onChange={onChange} />

        <PrimaryInput label="Пароль" name="password" type="password" required onChange={onChange} />

        <Button type="submit">Увійти</Button>
      </form>
    </div>
  );
};

PageAuth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAuth;
