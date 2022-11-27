import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';

import BlockHeaderSearch from './BlockHeaderSearch/BlockHeaderSearch';
import BlockHeaderLink from './BlockHeaderLink/BlockHeaderLink';
import s from './Block.module.scss';

const Block = props => {
  let {
    children,
    title = 'Block',
    iconId = 'info',
    footer = true,
    header = true,
    style = {},
    className = '',
    filter = false,
  } = props;
  const blockClassName = [s.block, className].join(' ');
  const [isSearch, setIsSearch] = useState(false);

  function handleBlockSearch() {
    setIsSearch(!isSearch);
  }

  const blockHandlers = {
    handleBlockSearch,
  };

  console.log(`block '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} {...blockHandlers}>
        <div className={blockClassName} style={style}>
          {header && (
            <>
              {filter && <BlockHeaderSearch search={isSearch} />}
              {!filter && <BlockHeaderLink />}
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
