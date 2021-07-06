import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_PICTURE_DATA,
  GET_VEHICLE_DATA,
  GET_POST_CARD_DATA,
  GET_VIDEO_POST_DATA,
  GET_COMMENT_DATA,
  GET_CARD_DETAILS,
  GET_BID_INFO,
  GET_IMAGE_PRODUCT_INFO,
  GET_USER_PROFILE,
  GET_AUCTION_DETAILS,
  GET_CATEGORIES_DETAILS,
} from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  initialURL: '/',
  error: '',
  loading: false,
  pictures: [],
  vehicles: [],
  postCards: [],
  videoPosts: [],
  comments: [],
  cardDetails: [],
  bidInfo: {},
  imagesProduct: [],
  userProfile:[],
  auctionDetails: [],
  categoriesDetails: []
};

export default function Common(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: '', loading: true };
    }
    case FETCH_SUCCESS: {
      return { ...state, error: '', loading: false };
    }
    case FETCH_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case GET_PICTURE_DATA: {
      return { ...state, pictures: action.payload };
    }
    case GET_VEHICLE_DATA: {
      return { ...state, vehicles: action.payload };
    }
    case GET_POST_CARD_DATA: {
      return { ...state, postCards: action.payload}
    }
    case GET_VIDEO_POST_DATA: {
      return { ...state, videoPosts: action.payload}
    }
    case GET_USER_PROFILE :{
      return { ...state, userProfile:action.payload}
    }
    case GET_COMMENT_DATA: {
      return { ...state, comments: action.payload}
    }
    case GET_CARD_DETAILS: {
      return { ...state, cardDetails: action.payload}
    }
    case GET_BID_INFO: {
      return { ...state, bidInfo: action.payload}
    }
    case GET_IMAGE_PRODUCT_INFO: {
      return { ...state, imagesProduct: action.payload}
    }
    case GET_AUCTION_DETAILS: {
      return { ...state, auctionDetails: action.payload}
    }
    case GET_CATEGORIES_DETAILS: {
      return { ...state, categoriesDetails: action.payload}
    }
    default: {
      return state;
    }
  }
}
