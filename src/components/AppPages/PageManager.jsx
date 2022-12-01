import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from './AppGridPage/AppGridPage';

// import s from './PageMain.module.scss';

const PageManager = () => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Вендори" iconId="partners" actions="primary" />}
        elementBottomLeft={<Block title="Вендор" iconId="person" actions="primary" />}
        elementBottomRight={<Block title="Бренди" iconId="brand" actions="primary" />}
      />
    </>
  );
};

PageManager.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageManager;
