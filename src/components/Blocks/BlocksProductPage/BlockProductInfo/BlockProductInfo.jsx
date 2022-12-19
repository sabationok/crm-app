import React from 'react';
import Block from 'components/Block/Block';
import TopInfo from './TopInfo/TopInfo';
import TableProductInfo from './TableProductInfo/TableProductInfo';
import TableProductImgs from './TableProductImgs/TableProductImgs';
import Actions from './Actions/Actions';
import BlockEmpty from '../BlockEmpty/BlockEmpty';
import { getAppPageSettings, getSelectedPost } from 'redux/selectors';
import { useSelector } from 'react-redux';

import s from './BlockProductInfo.module.scss';

const BlockProductInfo = () => {
  const selectedPost = useSelector(getSelectedPost);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  return (
    <Block title="Деталі" iconId="info" actions="primary" className={s[pageGrid]} ActionsComp={Actions} post={selectedPost}>
      {selectedPost?._id && <TopInfo />}
      {!selectedPost?._id && <BlockEmpty title="Оберіть пост зі списку" />}
      <TableProductInfo></TableProductInfo>

      <TableProductImgs></TableProductImgs>
    </Block>
  );
};
export default BlockProductInfo;
