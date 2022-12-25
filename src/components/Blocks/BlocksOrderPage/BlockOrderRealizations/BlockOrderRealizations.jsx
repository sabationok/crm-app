import React from 'react';
import Block from 'components/Block/Block';

import Actions from './Actions/Actions';
import BlockEmpty from 'components/Blocks/BlockEmpty/BlockEmpty';
import TableOrderDeliveries from 'components/TableOrderDeliveries/TableOrderDeliveries';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getAppPageSettings } from 'redux/selectors';
import { usePage } from 'components/AppPages/PageProvider';

import s from './BlockOrderRealizations.module.scss';

const BlockOrderRealizations = props => {
  const page = usePage();
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  // const { id } = useParams();

  const blockSettings = {
    className: s[pageGrid],
    ActionsComp: Actions,
    order: page.order,
    ...props,
  };

  return <Block {...blockSettings}>{page.order?._id ? <TableOrderDeliveries /> : <BlockEmpty title={'Оберіть замовлення'} />}</Block>;
};

export default BlockOrderRealizations;
