import React from 'react';
import PropTypes from 'prop-types';
import AppGridPage from './AppGridPage/AppGridPage';
import { BlockCounterPartysList, BlockCounterPartyInfo, BlockCounterPartyChat } from 'components/Blocks/CounterPartyBlocks';

import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

const PageCounterParty = props => {
  return (
    <>
      <MinTabletXl>
        <BlockCounterPartysList />
        <BlockCounterPartyInfo />
        <BlockCounterPartyChat />
      </MinTabletXl>
      <MaxToTablet>
        <BlockCounterPartysList />
      </MaxToTablet>
    </>
  );
};

PageCounterParty.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageCounterParty;
