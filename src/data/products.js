import { initialUserInfo as userInfo } from './users';

export const postStatus = {
  APPROVED: 'approved',
  ARCHIVED: 'archived',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  PENDING: 'pending',
  RESOLVING: 'resolving',

  AVAILABLE: 'available',
  NOT_AVAILABLE: 'notAvailable',
  AWAITING_ON_STOCK: 'awaitingOnStock',

  VISIBLE: 'visible',
  HIDDEN: 'hidden',

  IS_COMMISSION: 'isCommission',
  IS_STANDART: 'isStandart',
};
const { APPROVED, REJECTED, PENDING, AVAILABLE, NOT_AVAILABLE, AWAITING_ON_STOCK } = postStatus;
export const initialFormState = {
  // ???!!! seting by server ????
  // createdAt: '', // * date
  // _id: nanoid(14)// * string
  // updatedAt: '', // * date
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
    updatorId: '', // * string // * userInfo.id
    updatorName: '', // * string // * userInfo.id
    updatorType: '', // * string // * userInfo.id
  },
  categoryInfo: {
    section: '', // * string
    sectionName: '', // * string
    owner: '', // * string
    ownerName: '', // * string
    name: '', // * string
    _id: '', // * string
  },
  availabilityInfo: {
    // ? availability
    availability: '', // * string
    order: false, // * boolean
    orderAwaitingTime: '', // * number/string
    specialOrder: false, // * boolean
    specialOrderAwaitingTime: '', // * number/string
    // available, notAvailable, awaitingOnStock, order, specialOrder
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
export const initialState = prepeareProductData(initialFormState);
export function prepeareProductData({
  _id,
  sku,
  name,
  brand,
  approvedStatus,
  visibilityStatus,
  description,
  innerComment,
  createdAt,
  creator,
  updatedAt,
  updator,
  categoryInfo: { categoryName = '', section = '', sectionName = '', owner = '', ownerName = '' },
  availabilityInfo,
  priceInfo,
  ...others
}) {
  let data = {
    _id,
    sku,
    name,
    brand,
    approvedStatus,
    visibilityStatus,
    createdAt,
    creator,
    updatedAt,
    updator,
    ...{ categoryName, section, sectionName, owner, ownerName },
    ...availabilityInfo,
    ...priceInfo,
    description,
    innerComment,
  };
  return data;
}
export function prepeareProductSubmitData(data) {
  let submitData = {
    sku: data?.sku,
    name: data?.name,
    brand: data?.brand,
    brandId: data?.brandId,
    approvedStatus: data?.approvedStatus,
    visibilityStatus: data?.visibilityStatus,

    categoryInfo: {
      sectionName: data?.sectionName,
      section: data?.section,
      ownerName: data?.ownerName,
      owner: data?.owner,
      categoryName: data?.CategoryName,
      _id: data?._id,
    },

    availabilityInfo: {
      availability: data?.availability,
      order: data?.order,
      orderAwaitingTime: data?.orderAwaitingTime,
      specialOrder: data?.specialOrder,
      specialOrderAwaitingTime: data?.specialOrderAwaitingTime,
    },

    priceInfo: {
      price: data?.price,
      cost: data?.cost,
      isCommission: data?.isCommission,
      commission: data?.commission,
      sale: data?.sale,
      cashbackId: data?.cashbackId,
      currency: data?.currency,
    },

    description: data?.description,
    innerComment: data?.innerComment,
  };
  return submitData;
}
export const incomeData = {
  _id: '51dfgn65fgn1ddfn1321',
  sku: '321865168151',
  name: 'Сукня синя, шовкова',
  brand: 'Noverra',
  createdAt: '2022.12.10 12:52:20',
  creator: {
    _id: userInfo?._id,
    name: userInfo?.name,
    role: userInfo?.role,
  },
  updatedAt: '2022.12.15 16:50:10',
  updator: {
    _id: userInfo?._id,
    name: userInfo?.name,
    role: userInfo?.role,
  },
  approvedStatus: 'success',
  visibilityStatus: false,
  categoryInfo: {
    sectionName: 'Одяг',
    section: '54951',
    ownerName: 'Жінкам',
    owner: '6151',
    categoryName: 'Сукні, вечірні',
  },
  availabilityInfo: {
    availability: '',
    order: false,
    orderAwaitingTime: 2,
    specialOrder: false,
    specialOrderAwaitingTime: 6,
  },
  priceInfo: {
    price: 500,
    cost: 400,
    isCommission: true,
    commission: 5,
    cashbackId: 3,
    sale: 10,
    currency: 'UAH',
  },
  description: 'Опис товару',
  innerComment: 'Коментар',
};
export const productsArrTest = [
  {
    ...incomeData,
    _id: 'fdg6b51656df2g',
    sku: 'fdg6b51656df2g',
    approvedStatus: APPROVED,
    visibilityStatus: false,
    availabilityInfo: {
      availability: NOT_AVAILABLE,
      order: false,
      orderAwaitingTime: 2,
      specialOrder: false,
      specialOrderAwaitingTime: 6,
    },
  },
  {
    ...incomeData,
    _id: 'sdf1b6s1d3s2ff',
    sku: 'sdf1b6s1d3s2ff',
    approvedStatus: PENDING,
    visibilityStatus: false,
    availabilityInfo: {
      availability: NOT_AVAILABLE,
      order: false,
      orderAwaitingTime: 2,
      specialOrder: false,
      specialOrderAwaitingTime: 6,
    },
  },
  {
    ...incomeData,
    _id: 'sd21fv32d1f32s',
    sku: 'sd21fv32d1f32s',
    approvedStatus: APPROVED,
    visibilityStatus: true,
    availabilityInfo: {
      availability: AWAITING_ON_STOCK,
      order: false,
      orderAwaitingTime: 2,
      specialOrder: false,
      specialOrderAwaitingTime: 6,
    },
    priceInfo: {
      price: 700,
      cost: 500,
      isCommission: false,
      commission: 5,
      cashbackId: 2,
      sale: 3,
      currency: 'UAH',
    },
  },
  {
    ...incomeData,
    _id: 'fdg6b51656dsfs',
    sku: 'fdg6b51656dsfs',
    approvedStatus: REJECTED,
    visibilityStatus: false,
    availabilityInfo: {
      availability: AVAILABLE,
      order: true,
      orderAwaitingTime: 2,
      specialOrder: true,
      specialOrderAwaitingTime: 6,
    },
  },
  {
    ...incomeData,
    _id: 'fdg6bas656dsfs',
    sku: 'fdg6bas656dsfs',
    approvedStatus: PENDING,
    availabilityInfo: {
      availability: AVAILABLE,
      order: false,
      orderAwaitingTime: 2,
      specialOrder: true,
      specialOrderAwaitingTime: 6,
    },
  },
  {
    ...incomeData,
    _id: 'fdg6sd1656dsfs',
    sku: 'fdg6sd1656dsfs',
    approvedStatus: REJECTED,
    visibilityStatus: true,
    availabilityInfo: {
      availability: AVAILABLE,
      order: true,
      orderAwaitingTime: 2,
      specialOrder: false,
      specialOrderAwaitingTime: 6,
    },
  },
];
