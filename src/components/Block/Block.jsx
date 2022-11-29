import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
import BlockHeader from './BlockHeader/BlockHeader';

import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors';

import s from './Block.module.scss';

const Block = ({
  children,
  title = 'Title',
  iconId = 'info',
  footer = true,
  header = true,
  style = {},
  className = '',
  filter = false,
  ...otherProps
}) => {
  let props = { title, iconId, footer, header, style, className, filter };
  const { isDarkTheme } = useSelector(getAppSettings);
  const blockClassName = [isDarkTheme ? s.blockDark : s.block, className].join(' ');
  const [isSearch, setIsSearch] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  function handleToggleBlockSearch() {
    setIsSearch(!isSearch);
  }
  function handleToggleEditForm() {
    setIsFormDisabled(!isFormDisabled);
  }

  const state = {
    isSearch,
    isFormDisabled,
  };
  const stateHandlers = {
    handleToggleBlockSearch,
    handleToggleEditForm,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} {...otherProps} {...stateHandlers} {...state}>
        <div className={blockClassName} style={style}>
          {header && (
            <>
              {filter && <BlockHeaderSearch />}
              {!filter && <BlockHeader />}
            </>
          )}

          <div className={s.content} id={iconId}>
            <div className={s.overflow}>
              {children}

              {!children && (
                <div className={s.inWork}>
                  <span>In work ...</span>
                </div>
              )}
            </div>
          </div>

          {footer && <div className={s.footer}></div>}
        </div>
      </BlockContext>
    </>
  );
};

Block.propTypes = {};

export default Block;
