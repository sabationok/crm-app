import FormAuth from 'components/Forms/FormAuth/FormAuth';
import PropTypes from 'prop-types';

import s from './PageAuth.module.scss';

const PageAuth = ({ path = 'signUp' }) => {
  const formSettings = {
    blockSettings: {
      iconId: 'person',
      title: path !== 'signUp' ? 'Здійснити вхід' : 'Зареєструватись',
    },
    [path]: true,
  };
  return (
    <div className={s.PageAuth}>
      <FormAuth {...formSettings} />
    </div>
  );
};

PageAuth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageAuth;
