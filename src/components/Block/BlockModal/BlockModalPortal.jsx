import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const BlockModalPortal = props => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const blockRef = document.getElementById(`${props.id}-modal`);

  useEffect(() => {
    if (props.id) {
      setIsPortalOpen(true);
      return;
    }
    setIsPortalOpen(false);
  }, [props.id]);
  if (!isPortalOpen) {
    return;
  }
  return ReactDOM.createPortal(props.children, blockRef);
};

BlockModalPortal.propTypes = {};

export default BlockModalPortal;
