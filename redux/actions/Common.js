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
  GET_AUCTION_DETAILS,
  GET_CATEGORIES_DETAILS,
  GET_USER_PROFILE
} from '../../@jumbo/constants/ActionTypes';
import { pictures } from '../mock/home/picture';
import { vehicles } from '../mock/news/vehicle';
import { postCards } from '../mock/home/postCard';
import { videoPosts } from '../mock/news/videoPost';
import { comments } from '../mock/home/comments';
import { cardDetails } from '../mock/home/cardDetails';
import { bidInfo } from '../mock/productDetail/bidInfo';
import { imagesProduct } from '../mock/productDetail/imagesProduct';
import { auctionDetails } from '../mock/tracking-auction/auctionDetails';
import { categoriesDetails } from '../mock/categories/categoriesDetails';
import { userProfile } from '../mock/userProfile/userProfile';

export const fetchSuccess = () => {
  return dispatch => {
    dispatch({
      type: FETCH_SUCCESS,
    });
  };
};
export const fetchError = error => {
  return dispatch => {
    dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  };
};

export const fetchStart = () => {
  return dispatch => {
    dispatch({
      type: FETCH_START,
    });
  };
};

export const getPictureData = () => {
  return {
    type: GET_PICTURE_DATA,
    payload: pictures,
  };
};

export const getVehicleData = () => {
  return {
    type: GET_VEHICLE_DATA,
    payload: vehicles,
  };
};

export const getPostCard = () => {
  return {
    type: GET_POST_CARD_DATA,
    payload: postCards,
  };
};

export const getVideoPost = () => {
  return {
    type: GET_VIDEO_POST_DATA,
    payload: videoPosts,
  };
};

export const getUserProfile = () => {
  return {
    type: GET_USER_PROFILE,
    payload: userProfile,
  }
};

export const getComments = () => {
  return {
    type: GET_COMMENT_DATA,
    payload: comments,
  };
};

export const getCardDetails = () => {
  return {
    type: GET_CARD_DETAILS,
    payload: cardDetails,
  }
}

export const getBidInfo = () => {
  return {
    type: GET_BID_INFO,
    payload: bidInfo,
  }
}

export const getImagesProductInfo = () => {
  return {
    type: GET_IMAGE_PRODUCT_INFO,
    payload: imagesProduct,
  }
}

export const getAuctionDetails = () => {
  return {
    type: GET_AUCTION_DETAILS,
    payload: auctionDetails,
  }
}

export const getCategoriesDetails = () => {
  return {
    type: GET_CATEGORIES_DETAILS,
    payload: categoriesDetails
  }
}