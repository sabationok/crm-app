import React from 'react';
import Block from 'components/Block/Block';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockRefundsList.module.scss';
import TableList from 'components/TableList/TableList';

const BlockRefundsList = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const blockSettings = {
    className: s[pageGrid],
    // prepareRowData: prepeareProductData,
    // prepareSubmitData: prepeareProductSubmitData,
    // deleteAction,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      <TableList />
    </Block>
  );
};

export default BlockRefundsList;
