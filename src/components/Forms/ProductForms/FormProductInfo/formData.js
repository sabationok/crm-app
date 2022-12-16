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
  // createdAt: '', // * date
  // changedAt: '', // * date
  // id: '', // * string
  // ? last author data who changed
  changedByAuthorId: '', // * string // * userInfo.id
  changedByAuthorName: '', // * string // * userInfo.id
  changedByAuthorType: '', // * string // * userInfo.id
  // ? author data who created
  authorId: '', // * string // * userInfo.id
  authorName: '', // * string // * userInfo.name
  authorType: '', // * string // * userInfo.type
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
  createdAt: String(new Date()),
  changedAt: String(new Date()),
  sku: '321865168151',
  name: 'Сукня синя, шовкова',
  brand: 'Noverra',
  authorId: userInfo.id,
  authorName: userInfo.name,
  authorType: userInfo.type,
  aprovedStatus: false,
  changedByAuthorId: '',
  changedByAuthorName: '',
  changedByAuthorType: '',
  sectionId: '', // * string
  section: 'Одяг',
  parentCategoryId: '', // * string
  parentCategory: 'Жінкам',
  categoryId: '', // * string
  category: 'Сукні, вечірні',

  availability: '',
  notAvailable: '',
  awaitingInStock: '',
  onStock: '',
  toOrder: '',
  individual: '',
  productionTime: 7,
  description: 'Description',
  innerComment: 'Comment',
  cost: 400,
  isCommission: false,
  commission: 5,
  cashbackId: 3,
  sale: 10,
  currency: 'UAH',
  price: 500,
};
