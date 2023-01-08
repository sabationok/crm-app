export const initialUserInfo = {
  createdAt: '', // * date
  updatedAt: '', // * date
  _id: '', // * string
  name: '', // * string
  login: '', // * string
  type: '', // * string
  email: '', // * string
  phone: '', // * string
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
};
export const userRoles = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  VENDOR: 'VENDOR',
  GUEST: 'GUEST',
};

export const userStatus = {
  ACTIVE: 'ACTIVE',
  NOT_ACTIVE: 'NOT_ACTIVE',
  PENDING: 'PENDING',
};
export const users = [
  {
    ...initialUserInfo,
    id: 'sd5f1g3sd2f1g3sd21',
    name: 'vitalii',
    type: 'admin',
    login: 'goodcat',
    email: 'tester3@m.com',
    password: '456123789',
  },
  {
    ...initialUserInfo,
    _id: 'er5g1s65f13ds2f1',
    name: 'Volodymyr',
    type: 'manager',
    login: 'vova',
    email: 'Volodymyr@m.com',
    password: '123123123',
  },
  {
    ...initialUserInfo,
    _id: 'sdf3ds1fg32d1s32',
    name: 'Kateryna',
    type: 'vendor',
    login: 'katia',
    email: 'Kateryna@m.com',
    password: '123456789',
  },
  {
    ...initialUserInfo,
    createdAt: '', // * date
    updatedAt: '', // * date
    _id: '21651asv165s1fv', // * string
    name: 'Valeria Baranovka', // * string
    type: 'vendor', // * string
    email: 'valeria@mail.com', // * string
    phone: '+3806543218', // * string
    // !! only for VENDORS
    companyName: '', // * stringF
    brandsList: [], // * array of string
    mangerId: [], // * array of string
    // !! only for MANAGERS
    vendorslist: [], // * array of string
  },
];
