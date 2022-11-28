import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';

import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
import BlockHeader from './BlockHeader/BlockHeader';
import s from './Block.module.scss';

const Block = props => {
  let {
    children,
    title = 'Title',
    iconId = 'info',
    footer = true,
    header = true,
    style = {},
    className = '',
    filter = false,
  } = props;
  const blockClassName = [s.block, className].join(' ');
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
      <BlockContext {...props} {...stateHandlers} {...state}>
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
