import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
// import { useDispatch } from 'react-redux';
// import { applyFounder } from '../../BlockUtils/founder';

import scss from './BlockFounder.module.scss';

const BlockFounder = ({ blockFilterParams }) => {
  // const {
  //   tableTitles = [],
  //   searchQueryAction,
  //   searchParamAction,
  // } = blockFilterParams;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useState({ name: '' }); //!
  const [isSelectOpen, seIsSelectOpen] = useState(false); //!
  const [foundedData, ] = useState([]); //!
  // const dispatch = useDispatch();

  const classOpen = [scss.customSelect, isSelectOpen && scss.isOpen].join(' ');

  function onInputChange(evt) {
    let { target } = evt;
    setSearchQuery(target.value);
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    // dispatch(searchQueryAction(searchQuery.trim()));
    // dispatch(searchParamAction(searchParam));
  }
  function handleToggleOpenSelect() {
    seIsSelectOpen(!isSelectOpen);
  }
  function onSearchParamClick({ evt, item }) {
    setSearchParam(item);
    handleToggleOpenSelect();
  }
  function handleChangeSearchParamInput(evt) {
    let { target } = evt;
    setSearchParam({ ...searchParam, name: target.value });
  }
  // useEffect(() => {
  //   setFoundedData(
  //     applyFounder({
  //       searchParam: 'name',
  //       searchQuery: searchParam.name,
  //       data: tableTitles.filter(el => el?.filter && el?.visible),
  //     })
  //   );
  // }, [searchParam, tableTitles]);
  // useEffect(() => {
  //   if (searchQuery === '') {
  //     dispatch(searchQueryAction(''));
  //   }
  // }, [dispatch, searchQuery, searchQueryAction]);
  // useEffect(() => {
  //   if (searchParam.name === '') {
  //     dispatch(searchParamAction(''));
  //   }
  // }, [dispatch, searchParam, searchParamAction]);
  return (
    <div className={scss.filterContainer}>
      <form
        className={scss.filterForm}
        onSubmit={evt => {
          handleFormSubmit(evt);
        }}
      >
        <div className={classOpen} onClick={handleToggleOpenSelect}>
          <input
            className={scss.inputParam}
            type="text"
            placeholder="Параметр"
            value={searchParam.name}
            onChange={handleChangeSearchParamInput}
          />
          <ul className={scss.selectList}>
            {foundedData.map(item => (
              <li
                key={item.id}
                className={scss.selectItem}
                data-title={item.dataTitle}
                onClick={evt => {
                  onSearchParamClick({ evt, item });
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={scss.customFounder}>
          <input
            className={scss.inputFounder}
            type="text"
            name="searchQuery"
            value={searchQuery}
            placeholder="Пошук"
            onChange={evt => {
              onInputChange(evt);
            }}
          />
        </div>

        <button className={scss.button} type="submit">
          <SvgIcon iconId="search" size="24px" />
        </button>
      </form>
    </div>
  );
};

BlockFounder.propTypes = {};

export default BlockFounder;
