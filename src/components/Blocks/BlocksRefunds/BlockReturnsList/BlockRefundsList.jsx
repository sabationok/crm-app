import React from 'react';
import Block from 'components/Block/Block';
import TableList from 'components/TableList/TableList';
import { refundsTableTitles } from 'data';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockRefundsList.module.scss';

const BlockRefundsList = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const blockSettings = {
    className: s[pageGrid],
    // prepareRowData: prepeareProductData,
    // prepareSubmitData: prepeareProductSubmitData,
    // deleteAction,
    ...props,
  };
  const tableSettings = {
    tableTitles: refundsTableTitles,
  };
  return (
    <Block {...blockSettings}>
      <TableList {...tableSettings} />
    </Block>
  );
};

export default BlockRefundsList;
