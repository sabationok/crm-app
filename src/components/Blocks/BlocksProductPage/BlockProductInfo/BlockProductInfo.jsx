import React from 'react';
import Block from 'components/Block/Block';
import TopInfo from './TopInfo/TopInfo';
import TableProductInfo from './TableProductInfo/TableProductInfo';
import TableProductImgs from './TableProductImgs/TableProductImgs';
import BlockModalPortal from 'components/Block/BlockModal/BlockModalPortal';
import { useSelector } from 'react-redux';
import Actions from './Actions/Actions';
// import { getPosts } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';
// import {fetchAllPosts} from 'redux/posts/postsThunks';

import s from './BlockProductInfo.module.scss';

const BlockProductInfo = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  // console.log(posts);

  // useEffect(() => {
  //   dispatch(fetchAllPosts());
  // }, [dispatch]);
  return (
    <Block title="Деталі" iconId="info" actions="primary" className={s[pageGrid]}>
      <BlockModalPortal id="info">
        <Actions />
      </BlockModalPortal>

      <TableProductInfo>
        <TopInfo />
      </TableProductInfo>

      <TableProductImgs></TableProductImgs>
    </Block>
  );
};
export default BlockProductInfo;
