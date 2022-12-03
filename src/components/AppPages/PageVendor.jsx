import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from './AppGridPage/AppGridPage';

// import s from './PageMain.module.scss';

const PageVendor = (props) => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        {...props}
        elementTop={<Block title="Бренди" iconId="brand" actions="primary" />}
        elementBottomLeft={<Block title="Інше" iconId="info" actions="primary" />}
        elementBottomRight={<Block title="Сповіщення" iconId="chat" actions="primary" />}
      />
    </>
  );
};

PageVendor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageVendor;
