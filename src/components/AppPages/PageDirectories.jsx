import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import { BlockMenageCategories } from 'components/Blocks';
import { blocksNames, getBlockSettings } from 'data';
import { useDispatch } from 'react-redux';
import { actionSetPageGridChange } from 'redux/page/pageActions';

const PageSettings = ({ path = 'categories' }) => {
  const dispatch = useDispatch();
  const [BlockCategoriesSet] = useState(getBlockSettings(blocksNames?.Categories));

  const BlocksMap = {
    categories: <BlockMenageCategories {...BlockCategoriesSet} />,
  };

  useEffect(() => {
    dispatch(actionSetPageGridChange(true));

    return () => {
      dispatch(actionSetPageGridChange(false));
    };
  }, [dispatch]);

  return (
    <>
      <MinTabletXl>{BlocksMap.categories}</MinTabletXl>
      <MaxToTablet>{path ? BlocksMap[path] : BlocksMap.categories}</MaxToTablet>
    </>
  );
};

PageSettings.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PageSettings;
