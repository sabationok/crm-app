import PropTypes from 'prop-types';

import NavMenuHomePage from 'components/Layout/NavMenuHomePage/NavMenuHomePage';

import s from './PageHome.module.scss';

const PageHome = props => {
  return (
    <div className={s.pageHome}>
      <NavMenuHomePage />
    </div>
  );
};

PageHome.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageHome;
