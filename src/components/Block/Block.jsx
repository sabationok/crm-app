import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import BlockHeaderFilter from './BlockHeaderFilter/BlockHeaderFilter';
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
    blockFilter = false,
    blockFilterParams,
  } = props;
  const blockClassName = [s.block, className].join(' ');
  const [isSearch, setIsSearch] = useState(false);

  function handleBlockSearch() {
    setIsSearch(!isSearch);
  }

  console.log('small block initialize');
  useEffect(() => {
    console.log(`small block '${title}'render`);
  }, [title]);

  const blockHandlers = {
    handleBlockSearch,
  };
  return (
    <>
      <BlockContext {...props} {...blockHandlers}>
        <div className={blockClassName} style={style}>
          {header && isSearch && (
            <BlockHeaderFilter
              blockFilter={blockFilter}
              blockFilterParams={blockFilterParams}
              title={title}
              iconId={iconId}
            />
          )}
          {header && !isSearch && <BlockHeaderLink title={title} iconId={iconId} />}

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
