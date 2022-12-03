import PropTypes from 'prop-types';
import Block from 'components/Block/Block';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
const PageMain = props => {
  return (
    <>
      <MinTabletXl>
        <Block title="Список завдань" iconId="list" actions="withFilter" filter />
        <Block title="Деталі завдання" iconId="info" actions="primary" />
        <Block title="Сповіщення" iconId="chat" actions="primary" />
      </MinTabletXl>
      <MaxToTablet>
        <Block title="Список завдань" iconId="list" actions="withFilter" filter />
      </MaxToTablet>
    </>
  );
};

PageMain.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageMain;
