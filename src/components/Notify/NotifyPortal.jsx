import ReactDOM from 'react-dom';

const NotifyPortal = props => {
  const notifyRef = document.querySelector('.notifications');
  return ReactDOM.createPortal(props.children, notifyRef);
};

NotifyPortal.propTypes = {};

export default NotifyPortal;
