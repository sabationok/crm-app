import Block from 'components/Block/Block';
import CreateCategoriesList from 'components/CreateCategoriesList/CreateCategoriesList';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockMenageCategories.module.scss';

const BlockMenageCategories = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const blockSettings = {
    className: s[pageGrid],

    ...props,
  };

  return (
    <Block {...blockSettings}>
      <CreateCategoriesList />
    </Block>
  );
};

export default BlockMenageCategories;
