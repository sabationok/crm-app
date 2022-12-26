import React from 'react';
import Block from 'components/Block/Block';

import BlockEmpty from '../../BlockEmpty/BlockEmpty';
import Actions from './Actions/Actions';
import TableDinamic from 'components/TableDinamic/TableDinamic';
import { stockData } from 'data';
import { usePage } from 'components/AppPages/PageProvider';
import { getAppPageSettings } from 'redux/selectors';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

import s from './BlockProductStock.module.scss';

const BlockProductStock = props => {
  const page = usePage();
  // const { id } = useParams();

  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const blockSettings = {
    className: s[pageGrid],
    ActionsComp: Actions,
    post: page.post,
    stockData: stockData,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      <></>

      {page.post?._id ? <TableDinamic disabled /> : <BlockEmpty title="Оберіть пост зі списку" />}
    </Block>
  );
};
export default BlockProductStock;
