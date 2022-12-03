import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

const PageVendor = props => {
  return (
    <>
      {' '}
      <MinTabletXl>
        <Block title="Профіль" iconId="partners" actions="primary" />
        <Block title="Бренди" iconId="brand" actions="primary" />
        <Block title="Інше" iconId="info" actions="primary" />
        <Block title="Сповіщення" iconId="chat" actions="primary" />
      </MinTabletXl>
      <MaxToTablet>
        <Block title="Профіль" iconId="partners" actions="primary" />
      </MaxToTablet>
    </>
  );
};

PageVendor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageVendor;
