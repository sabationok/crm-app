import { NavLink } from 'react-router-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useDispatch } from 'react-redux';
import { actionSetPage } from 'redux/page/pageActions';
import s from './MenuNavLink.module.scss';

const MenuNavLink = ({ item }) => {
  const dispatch = useDispatch();

  function handleDispatchAppPage() {
    dispatch(actionSetPage(item));
  }
  return (
    <>
      <li onClick={handleDispatchAppPage}>
        <NavLink
          to={item.path}
          className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}
          onClick={handleDispatchAppPage}
        >
          {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
          <span>{item.title}</span>
        </NavLink>
      </li>
    </>
  );
};

export default MenuNavLink;
