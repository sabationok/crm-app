import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import AppGridPage from './AppGridPage/AppGridPage';

// import s from './PageMain.module.scss';

const PageMain = () => {
  return (
    <>
      <AppGridPage
        pageGrid_5_5
        elementTop={<Block title="Список завдань" iconId="list" actions="withFilter" filter />}
        elementBottomLeft={<Block title="Деталі завдання" iconId="info" actions="primary" />}
        elementBottomRight={<Block title="Сповіщення" iconId="chat" actions="primary" />}
      />
    </>
  );
};

PageMain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageMain;
