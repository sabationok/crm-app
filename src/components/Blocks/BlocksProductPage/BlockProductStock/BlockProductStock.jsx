import React from 'react';
import Block from 'components/Block/Block';

// import FormProductStock from 'components/Forms/ProductForms/FormProductStock/FormProductStock';
import BlockEmpty from '../BlockEmpty/BlockEmpty';
import Actions from './Actions/Actions';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';
import TableDinamic from 'components/TableDinamic/TableDinamic';
// import { getPosts } from 'redux/selectors';
import { useParams } from 'react-router-dom';
// import { rowOptions, collOptions, collumns, rows } from ;
import { stockData } from 'data';
import s from './BlockProductStock.module.scss';

const BlockProductStock = () => {
  const { id } = useParams();
  // const { posts } = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  // const selectedPost = posts.find(post => post?._id === id);
  return (
    <Block title="Склад" iconId="storage" actions="primary" className={s[pageGrid]} ActionsComp={Actions} stockData={stockData}>
      {id ? <TableDinamic /> : <BlockEmpty title="Оберіть пост зі списку" />}
    </Block>
  );
};
export default BlockProductStock;
