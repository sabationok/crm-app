import React from 'react';
import Block from 'components/Block/Block';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import FormProductInfo from 'components/Forms/ProductForms/FormProductInfo/FormProductInfo';
import FormProductImgs from 'components/Forms/ProductForms/FormProductImgs/FormProductImgs';
import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';
import { useSelector } from 'react-redux';
import { getPosts } from 'redux/selectors';
import { getAppPage } from 'redux/selectors';
import s from './BlockProductInfo.module.scss';
const BlockProductInfo = () => {
  const posts = useSelector(getPosts);
  const { pageGrid = 'gridFirst' } = useSelector(getAppPage);

  console.log(posts);

  return (
    <Block title="Деталі" iconId="info" actions="primary" className={s[pageGrid]}>
      <ModalOpenButton
        modalChildren={
          <BlockSimple title="Hедагування товару" iconId="info" className={s.modalBlock} headerClassName={s.modalHeader}>
            <FormProductInfo edit />
            <FormProductImgs />
          </BlockSimple>
        }
      >
        Редагувати товар
      </ModalOpenButton>
    </Block>
  );
};
export default BlockProductInfo;
