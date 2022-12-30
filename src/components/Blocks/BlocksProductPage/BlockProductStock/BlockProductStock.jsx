import React from 'react';
import Block from 'components/Block/Block';

import BlockEmpty from '../../BlockEmpty/BlockEmpty';
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
    post: page.post,
    stockData: stockData,
    ...props,
  };
  console.log(page.post);
  return (
    <Block {...blockSettings}>
      <></>

      {page.post?._id ? (
        <>
          {page.post?.availabilityInfo?.availability === 'available' ? (
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
