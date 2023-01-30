export const usersTableTitles = [
  { title: 'ID', dataKey: '_id', width: '200px' },
  { title: 'Ініціали', dataKey: 'name', width: '125px' },
  { title: 'Емейл', dataKey: 'email', width: '200px' },
  { title: 'Роль', dataKey: 'role', width: '100px' },
  { title: 'Статус', dataKey: 'status', width: '100px' },
  { title: 'Створено/Оновлено', dataKey: 'updatedAt', width: '200px', action: 'date' },
];
export const initialUserAuthInfo = {
  user: {
    _id: '', // * string
    createdAt: '', // * date
    updatedAt: '', // * date
    name: '', // * string
    email: '', // * string
    phone: '', // * string
    status: '', // * string
    role: '', // * string
    // !! only for VENDORS
    // vendorinfo: {
    //   brandsList: [], // * array of id
    //   managerId: '', // * string
    // },
    // !! only for MANAGERS
    // managerInfo: {
    //   vendors: [], // * array of id
    //   personalCode: '', // * string
    // },
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
export const registeredUserAuthInfo = {
  user: {
    _id: 'g56c1n6g1n3c5g1cg5b1', // * string
    createdAt: '', // * date
    updatedAt: '', // * date
    name: 'Petro Perelomnyi', // * string
    email: 'mail@i.ua', // * string
    phone: '', // * string
    status: 'ACTIVE', // * string
    role: 'ADMIN', // * string
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJfaWQiOiI2M2JhMzUwZDdlNWQ5NTQyNmUwZmIyYmUiLCJpYXQiOjE2NzMyNzM3Mzh9.OtAyuYn2O6V7Z1WlNkj0lwZGuyyor61Vz-HtGiu_8kU',
  isLoggedIn: true,
  isLoading: false,
  error: null,
};
