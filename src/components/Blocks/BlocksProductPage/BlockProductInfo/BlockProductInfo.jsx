import React from 'react';
import Block from 'components/Block/Block';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';

import TableProductInfo from './TableProductInfo/TableProductInfo';
import TableProductImgs from './TableProductImgs/TableProductImgs';
import { useSelector } from 'react-redux';
import { getPosts } from 'redux/selectors';
import { getAppPageSettings } from 'redux/selectors';
import s from './BlockProductInfo.module.scss';
const BlockProductInfo = () => {
  const posts = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);

  console.log(posts);

  return (
    <Block title="Деталі" iconId="info" actions="primary" className={s[pageGrid]}>
      <TableProductInfo>
        <ModalOpenButton
          modalChildren={
            <BlockSimple title="Редагування товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
              <FormProductInfo />
            </BlockSimple>
          }
        >
          Редагувати товар
        </ModalOpenButton>
      </TableProductInfo>
      <TableProductImgs>
        <ModalOpenButton
          modalChildren={
            <BlockSimple title="Редагування товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
              <FormProductImgs />
            </BlockSimple>
          }
        >
          Керувати зображеннями
        </ModalOpenButton>
      </TableProductImgs>
    </Block>
  );
};
export default BlockProductInfo;
