import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPortal';
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
  useEffect(() => {
    console.log(`small block '${title}'render`);
  }, [title]);
  const blockClassName = [s.block, className].join(' ');
  console.log('small block initialize');
  return (
    <>
      <BlockContext {...props}>
        <div className={blockClassName} style={style} >
          {header && blockFilter && (
            <BlockHeaderFilter
              blockFilter={blockFilter}
              blockFilterParams={blockFilterParams}
              title={title}
              iconId={iconId}
            />
          )}
          {header && !blockFilter && <BlockHeaderLink title={title} iconId={iconId} />}
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
        {/* <BlockPortal >
        </BlockPortal> */}
      </BlockContext>
    </>
  );
};

Block.propTypes = {};

export default Block;
