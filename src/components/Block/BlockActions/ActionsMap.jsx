import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import s from './BlockActions.module.scss';
export const actionsMap = {
  link: <ButtonIcon iconId="link" size="100%" className={s.hover} />,
  search: <ButtonIcon iconId="search" size="100%" className={s.hover} />,
  filter: <ButtonIcon iconId="filter-on" size="100%" className={s.hover} />,
  copy: <ButtonIcon iconId="copy" size="100%" className={s.hover} />,
  share: <ButtonIcon iconId="share" size="100%" className={s.hover} />,
  refresh: <ButtonIcon iconId="refresh" size="100%" className={s.hover} />,
  edit: <ButtonIcon iconId="edit" size="100%" className={s.hover} />,
  delete: <ButtonIcon iconId="delete" size="100%" className={s.hover} />,
  create: <ButtonIcon iconId="plus" size="100%" className={s.hover} />,
  print: <ButtonIcon iconId="print-on" size="100%" className={s.hover} />,
  upload: <ButtonIcon iconId="upload" size="100%" className={s.hover} />,
  download: <ButtonIcon iconId="download" size="100%" className={s.hover} />,
};
