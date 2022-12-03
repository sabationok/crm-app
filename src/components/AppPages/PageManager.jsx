import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
const PageManager = props => {
  return (
    <>
      <MinTabletXl>
        <Block title="Вендори" iconId="partners" actions="primary" />
        <Block title="Вендор" iconId="person" actions="primary" />
        <Block title="Бренди" iconId="brand" actions="primary" />
      </MinTabletXl>
      <MaxToTablet>
        <Block title="Вендори" iconId="partners" actions="primary" />
      </MaxToTablet>
    </>
  );
};

PageManager.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageManager;
