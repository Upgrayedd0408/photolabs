import { useReducer, useState } from "react";
import photos from "mocks/photos";

const useApplicationData = () => {

  const actions = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    CLOSE_MODAL: 'CLOSE_MODAL'
  };


  const reducer = (state, action) => {
    switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return { ...state, isFavouritePhoto: { ...state.isFavouritePhoto, [action.payload]: !state.isFavouritePhoto[action.payload] } };
    case 'DISPLAY_PHOTO_DETAILS':
      return { ...state, modalDisplayed: {displayed: true, selectedPhoto: action.payload} };
    case 'CLOSE_MODAL':
      return { ...state, modalDisplayed: {displayed: false, selectedPhoto: null }};
    }
  };

  const initialState = {
    isFavouritePhoto: {},
    modalDisplayed: {
      displayed: false,
      selectedPhoto: null
    },
  };


  const [state, dispatch] = useReducer(reducer, initialState);
  // Keep track of how many photos have been added to the favourite list. This creates an array of the values from the isFavouritePhoto Object and provides the array length. essentially counting them.
  let favouriteCount = Object.values(state.isFavouritePhoto).filter(isFav => isFav).length;


  const favouritePhoto = (photoId) => {
    dispatch({ type: actions.FAV_PHOTO_ADDED, payload: photoId });
  };

  const closeModal = () => {
    dispatch({ type: actions.CLOSE_MODAL });
  };

  const displayPhotoModal = (photoId) => {
    const selectedPhoto = photos.find(photo => photo.id === photoId);

    if (selectedPhoto) {
      dispatch({ type: actions.DISPLAY_PHOTO_DETAILS, payload: selectedPhoto});
    } else {
      closeModal();
    }
  };

  return {
    isFavouritePhoto: state.isFavouritePhoto,
    favouritePhoto,
    favouriteCount,
    modalDisplayed: state.modalDisplayed,
    closeModal,
    displayPhotoModal
  };
};

export default useApplicationData;
