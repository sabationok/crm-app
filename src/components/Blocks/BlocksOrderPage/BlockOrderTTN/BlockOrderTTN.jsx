import React from 'react';
import Block from 'components/Block/Block';
import TableOrderDeliveries from 'components/TableOrderDeliveries/TableOrderDeliveries';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import { useSelector } from 'react-redux';
import { usePage } from 'components/AppPages/PageProvider';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockOrderTTN.module.scss';

const BlockOrderTTN = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const page = usePage();

  const blockSettings = {
    className: s[pageGrid],
    ...props,
  };

  return <Block {...blockSettings}>{page.order?._id ? <TableOrderDeliveries /> : <BlockEmpty title={'Оберіть замовлення'} />}</Block>;
};

export default BlockOrderTTN;
