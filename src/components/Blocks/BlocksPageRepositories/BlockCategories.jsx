import Block from 'components/Block/Block';
import { useSelector } from 'react-redux';
import { getAppPageSettings } from 'redux/selectors';

import s from './BlockCategories.module.scss';

const BlockCategories = props => {
  const { pageGrid = 'gridFirst' } = useSelector(getAppPageSettings);
  const blockSettings = {
    className: s[pageGrid],

    ...props,
  };

  return <Block {...blockSettings}></Block>;
};

export default BlockCategories;
