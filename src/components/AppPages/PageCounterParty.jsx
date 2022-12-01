import React from 'react';
import PropTypes from 'prop-types';
import AppGridPage from './AppGridPage/AppGridPage';
import {
  BlockCounterPartysList,
  BlockCounterPartyInfo,
  BlockCounterPartyChat,
} from 'components/Blocks/CounterPartyBlocks';

// import s from './PageCounterParty.module.scss';

const PageCounterParty = props => {
  return (
    <>
      <AppGridPage
        pageGrid_6_5
        elementTop={<BlockCounterPartysList />}
        elementBottomLeft={<BlockCounterPartyInfo />}
        elementBottomRight={<BlockCounterPartyChat />}
      />
    </>
  );
};

PageCounterParty.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageCounterParty;
