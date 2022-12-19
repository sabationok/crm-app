const userInfo = {
  createdAt: '', // * date
  id: '21651asv165s1fv', // * string
  name: 'Valeria Baranovka', // * string
  type: 'manager', // * string
  email: 'valeria@mail.com', // * string
  phone: '+3806543218', // * string
  // !! only for VENDORS
  companyName: '', // * stringF
  brandsList: [], // * array of string
  mangerId: [], // * array of string
  // !! only for MANAGERS
  vendorslist: [], // * array of string
};
export const initialState = {
  // ???!!! seting by server ????
  // _createdAt: '', // * date
  // _updatedAt: '', // * date
  // _id: '', // * string
  // ? author data who created
  authorId: '', // * string // * userInfo.id
  authorName: '', // * string // * userInfo.name
  authorType: '', // * string // * userInfo.type
  // ? last author data who updated
  updatedByAuthorId: '', // * string // * userInfo.id
  updatedByAuthorName: '', // * string // * userInfo.id
  updatedByAuthorType: '', // * string // * userInfo.id
  // ? seting by author manualy or by randomizator
  sku: '', // * string
  // ? seting by author
  name: '', // * string
  // ? brand name setting by author & id (supplayer)
  brand: '', // * string
  brandId: '', // * string
  sectionId: '', // * string
  section: '', // * string
  parentCategoryId: '', // * string
  parentCategory: '', // * string
  categoryId: '', // * string
  category: '', // * string
  // ? availability
  availability: '', // * string
  order: false, // * boolean
  orderAwaitingTime: '', // * number/string
  specialOrder: false, // * boolean
  specialOrderAwaitingTime: '', // * number/string
  // ?
  description: '', // * string
  // ? comment for manager/vendor/admin. Not for customer
  innerComment: '', // * string
  // ? aproved by manager, automaticaly to TRUE when manager as creator
  aprovedStatus: false, // * boolean
  // ? is visible for customer
  isVisible: false, // * boolean
  // ? Counting process on frontend and post prepeared data to the server
  cost: 0, // *number 0.00
  isCommission: false, // * boolean
  commission: 0, // *number 0.00
  currency: '', // * string
  price: 0, // *number 0.00
  // ? not required
  sale: 0, // *number 0.00
  cashbackId: 0, // *number 0.00
  // ? optional inputs
  sizesTable: '',
};
export const incomeData = {
  _id: '51dfgn65fgn1ddfn1321',
  _createdAt: '2022.12.10 12:52:20',
  _updatedAt: '2022.12.15 16:50:10',
  sku: '321865168151',
  name: 'Сукня синя, шовкова',
  brand: 'Noverra',
  authorId: userInfo.id,
  authorName: userInfo.name,
  authorType: userInfo.type,
  approvedStatus: 'success',
  visibilityStatus: false,
  updatesByAuthorId: '',
  updatesByAuthorName: '',
  updatesByAuthorType: '',
  sectionId: '54951',
  section: 'Одяг',
  parentCategoryId: '6151',
  parentCategory: 'Жінкам',
  categoryId: '651',
  category: 'Сукні, вечірні',
  availability: null,
  order: false,
  orderAwaitingTime: 2,
  specialOrder: false,
  specialOrderAwaitingTime: 6,
  description: 'Опис товару',
  innerComment: 'Коментар який не буде замітно для користувачів зовні',
  cost: 400,
  isCommission: false,
  commission: 5,
  cashbackId: 3,
  sale: 10,
  currency: 'UAH',
  price: 500,
};
export const productsArrTest = [
  { ...incomeData, sku: 'fdg6b51656df2g', _id: '65165sd1dc65sd1', approvedStatus: 'pending', visibilityStatus: false, availability: 'available' },
  { ...incomeData, sku: 'sdf1b6s1d3s2ff', _id: '65153sd1dc65sd1', approvedStatus: 'pending', visibilityStatus: false, availability: 'notAvailable' },
  {
    ...incomeData,
    sku: 'sd21fv32d1f32s',
    _id: '651655165125sd5',
    approvedStatus: 'success',
    visibilityStatus: true,
    availability: 'awaitingOnStock',
  },
  { ...incomeData, sku: 'fdg6b51656dsfs', _id: '65sdfbbdsd1dc65', approvedStatus: 'rejected', visibilityStatus: false, availability: 'available' },
  { ...incomeData, sku: 'fdg6bas656dsfs', _id: '65sdfb58sd1dc65', approvedStatus: 'rejected', visibilityStatus: false, availability: 'notAvailable' },
];
