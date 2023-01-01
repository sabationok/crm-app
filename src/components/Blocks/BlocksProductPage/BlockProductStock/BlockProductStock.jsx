import React from 'react';
import Block from 'components/Block/Block';

import BlockEmpty from '../../BlockEmpty/BlockEmpty';
import TableDinamic from 'components/TableDinamic/TableDinamic';
import { stockData } from 'data';
import { getAppPageSettings, getPageObjData } from 'redux/selectors';
import { useSelector } from 'react-redux';

import s from './BlockProductStock.module.scss';

const BlockProductStock = props => {
  const post = useSelector(getPageObjData);

  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  const blockSettings = {
    className: s[pageGrid],
    stockData: stockData,
    ...props,
  };

  return (
    <Block {...blockSettings}>
      <></>

      {post?._id ? (
        <>
          {post?.availabilityInfo?.availability === 'available' ? (
            <TableDinamic disabled />
          ) : (
            <BlockEmpty title="Товар відсутній або очікується у наявності" />
          )}
        </>
      ) : (
        <BlockEmpty title="Оберіть пост зі списку" />
      )}
    </Block>
  );
};
export default BlockProductStock;
