import React from 'react';
// import PropTypes from 'prop-types';
import BlockContext from './BlockContext';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import { getAppSettings } from 'redux/selectors';
import { useSelector } from 'react-redux';

import s from './BlockSimple.module.scss';

const BlockSimple = props => {
  let {
    children,
    footerChildren,
    title = 'Title',
    iconId = 'info',
    footer = true,
    header = true,
    style = {},
    headerStyles = {},
    footerStyle = {},
    className = '',
    footerClassName = '',
    headerClassName = '',
  } = props;
  const { isDarkTheme } = useSelector(getAppSettings);
  const blockClassName = [isDarkTheme ? s.blockDark : s.block, className].join(' ');

  const state = {
    isDarkTheme,
  };
  const stateHandlers = {};

  console.log(`blockSimple '${title}'inicialize`);

  return (
    <>
      <BlockContext {...props} {...stateHandlers} {...state}>
        <div className={blockClassName} style={style}>
          {header && (
            <div className={[s.header, headerClassName].join(' ')} style={headerStyles}>
              <SvgIcon iconId={iconId} size={'24px'} />

              {title && (
                <span className={s.title}>
                  <span title={title}>{title}</span>
                </span>
              )}
            </div>
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

          {footer && (
            <div style={footerStyle} className={[s.footer, footerClassName].join(' ')}>
              {footerChildren}
            </div>
          )}
        </div>
      </BlockContext>
    </>
  );
};

BlockSimple.propTypes = {};

export default BlockSimple;
