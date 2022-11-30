import { NavLink } from 'react-router-dom';
import { MinTabletXl, MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';

import SvgIcon from 'components/SvgIcon/SvgIcon';
// import { useDispatch } from 'react-redux';
// import { actionSetPage } from 'redux/page/pageActions';
import s from './MenuNavLink.module.scss';

const MenuNavLink = ({ item }) => {
  // const dispatch = useDispatch();

  // function handleDispatchAppPage() {
  //   dispatch(actionSetPage(item));
  // }
  return (
    <>
      <li>
        <MaxToTablet>
          <NavLink to={`mobile/${item.path}`} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
            {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
            <span>{item.title}</span>
          </NavLink>
        </MaxToTablet>
        <MinTabletXl>
          <NavLink to={`desktop/${item.path}`} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
            {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
            <span>{item.title}</span>
          </NavLink>
        </MinTabletXl>
      </li>
    </>
  );
};

export default MenuNavLink;
