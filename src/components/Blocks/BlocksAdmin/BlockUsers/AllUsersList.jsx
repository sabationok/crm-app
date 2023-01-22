import TableList from 'components/TableList/TableList';
import BlockSimple from 'components/BlockSimple/BlockSimple';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from 'redux/selectors';
import { getAllUsersThunk } from 'redux/users/usersThunks';
import { toast } from 'react-toastify';
import { usersTableTitles } from 'data/users.data';

import s from './BlockUsers.module.scss';

const AllUsersList = () => {
  const { users = [], isLoading = false } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const tableSettings = {
    rowActions: false,
    tableTitles: usersTableTitles,
    tableData: users,
    isLoading,
  };

  useEffect(() => {
    const payload = {
      onSuccess: data => {
        toast.success(`Found ${data.length} users`);
      },
      onError: () => {
        toast.error(`Some proplem to get al users`);
      },
    };

    dispatch(getAllUsersThunk(payload));
  }, [dispatch]);

  return (
    <>
      <BlockSimple className={s.usersListBlock}>
        <TableList {...tableSettings} />
      </BlockSimple>
    </>
  );
};

export default AllUsersList;
