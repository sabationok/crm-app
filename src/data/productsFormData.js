import { userInfo } from './users';

export const initialFormState = {
  // ???!!! seting by server ????
  // createdAt: '', // * date
  // updatedAt: '', // * date
  // _id: '', // * string
  // ? seting by author manualy or by randomizator
  sku: '', // * string
  // ? seting by author
  name: '', // * string
  // ? brand name setting by author & id (supplayer)
  brand: '', // * string
  brandId: '', // * string
  // ? author data who created
  createdBy: {
    authorId: '', // * string // * userInfo.id
    authorName: '', // * string // * userInfo.name
    authorType: '', // * string // * userInfo.type
  },
  // ? last author data who updated
  updatedBy: {
    updatedByAuthorId: '', // * string // * userInfo.id
    updatedByAuthorName: '', // * string // * userInfo.id
    updatedByAuthorType: '', // * string // * userInfo.id
  },
  categoryInfo: {
    sectionId: '', // * string
    section: '', // * string
    parentCategoryId: '', // * string
    parentCategory: '', // * string
    categoryId: '', // * string
    category: '', // * string
  },
  availabilityInfo: {
    // ? availability
    availability: '', // * string
    order: false, // * boolean
    orderAwaitingTime: '', // * number/string
    specialOrder: false, // * boolean
    specialOrderAwaitingTime: '', // * number/string
  },

  // ?
  description: '', // * string
  // ? comment for manager/vendor/admin. Not for customer
  innerComment: '', // * string
  // ? aproved by manager, automaticaly to TRUE when manager as creator
  approvedStatus: false, // * boolean
  // ? is visible for customer
  visibilityStatus: false, // * boolean
  // ? Counting process on frontend and post prepeared data to the server
  priceInfo: {
    cost: 0, // *number 0.00
    isCommission: false, // * boolean
    commission: 0, // *number 0.00
    currency: '', // * string
    price: 0, // *number 0.00
    // ? not required
    sale: 0, // *number 0.00
    cashbackId: 0, // *number 0.00
    // ? optional inputs
  },
  sizesTable: '',
};
export const initialState = prepareRowData(initialFormState);
export function prepareRowData({
  _id,
  sku,
  name,
  brand,
  approvedStatus,
  visibilityStatus,
  description,
  innerComment,
  createdAt,
  createdBy,
  updatedAt,
  updatedBy,
  categoryInfo,
  availabilityInfo,
  priceInfo,
  ...others
}) {
  let rowData = {
    _id,
    sku,
    name,
    brand,
    approvedStatus,
    visibilityStatus,
    description,
    innerComment,
    createdAt,
    ...createdBy,
    updatedAt,
    ...updatedBy,
    ...categoryInfo,
    ...availabilityInfo,
    ...priceInfo,
  };
  return rowData;
}
export function prepareRowSubmitData(data) {
  let submitData = {
    sku: data?.sku,
    name: data?.name,
    brand: data?.brand,
    brandId: data?.brandId,
    approvedStatus: data?.approvedStatus,
    visibilityStatus: data?.visibilityStatus,
    categoryInfo: {
      sectionId: data?.sectionId,
      section: data?.section,
      parentCategoryId: data?.parentCategoryId,
      parentCategory: data?.parentCategory,
      categoryId: data?.categoryId,
      category: data?.category,
    },
    availabilityInfo: {
      availability: data?.availability,
      order: data?.order,
      orderAwaitingTime: data?.orderAwaitingTime,
      specialOrder: data?.specialOrder,
      specialOrderAwaitingTime: data?.specialOrderAwaitingTime,
    },
    description: data?.description,
    innerComment: data?.innerComment,
    priceInfo: {
      price: data?.price,
      cost: data?.cost,
      isCommission: data?.isCommission,
      commission: data?.commission,
      cashbackId: data?.cashbackId,
      sale: data?.sale,
      currency: data?.currency,
    },
  };
  return submitData;
}
export const incomeData = {
  _id: '51dfgn65fgn1ddfn1321',
  sku: '321865168151',
  name: 'Сукня синя, шовкова',
  brand: 'Noverra',
  createdAt: '2022.12.10 12:52:20',
  createdBy: {
    authorId: userInfo.id,
    authorName: userInfo.name,
    authorType: userInfo.type,
  },
  updatedAt: '2022.12.15 16:50:10',
  updatedBy: {
    updaterId: userInfo.id,
    updaterName: userInfo.name,
    updaterType: userInfo.type,
  },
  approvedStatus: 'success',
  visibilityStatus: false,
  categoryInfo: {
    sectionId: '54951',
    section: 'Одяг',
    parentCategoryId: '6151',
    parentCategory: 'Жінкам',
    categoryId: '651',
    category: 'Сукні, вечірні',
  },
  availabilityInfo: {
    availability: '',
    order: false,
    orderAwaitingTime: 2,
    specialOrder: false,
    specialOrderAwaitingTime: 6,
  },
  description: 'Опис товару',
  innerComment: 'Коментар',
  priceInfo: {
    price: 500,
    cost: 400,
    isCommission: true,
    commission: 5,
    cashbackId: 3,
    sale: 10,
    currency: 'UAH',
  },
};
export const productsArrTest = [
  {
    ...incomeData,
    sku: 'fdg6b51656df2g',
    _id: '65165sd1dc65sd1',
    approvedStatus: 'success',
    visibilityStatus: false,
    availabilityInfo: {
      availability: 'notAvailable',
    },
  },
  {
    ...incomeData,
    sku: 'sdf1b6s1d3s2ff',
    _id: '65153sd1dc65sd1',
    approvedStatus: 'pending',
    visibilityStatus: false,
    availabilityInfo: {
      availability: 'notAvailable',
    },
  },
  {
    ...incomeData,
    sku: 'sd21fv32d1f32s',
    _id: '651655165125sd5',
    approvedStatus: 'success',
    visibilityStatus: true,
    availabilityInfo: {
      availability: 'awaitingOnStock',
    },
  },
  {
    ...incomeData,
    sku: 'fdg6b51656dsfs',
    _id: '65sdfbbdsd1dc65',
    approvedStatus: 'rejected',
    visibilityStatus: false,
    availabilityInfo: {
      availability: 'available',
    },
  },
  {
    ...incomeData,
    sku: 'fdg6bas656dsfs',
    _id: '65sdfb58sd1dc65',
    approvedStatus: 'pending',
    availabilityInfo: {
      availability: 'available',
    },
  },
  {
    ...incomeData,
    sku: 'fdg6sd1656dsfs',
    _id: '65sdfbb45d1dc65',
    approvedStatus: 'rejected',
    visibilityStatus: true,
    availabilityInfo: {
      availability: 'available',
    },
  },
];
