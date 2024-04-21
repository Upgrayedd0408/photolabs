import { useReducer, useEffect } from "react";


const useApplicationData = () => {

  const actions = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA'
  };


  const reducer = (state, action) => {
    switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return { ...state, isFavouritePhoto: { ...state.isFavouritePhoto, [action.payload]: !state.isFavouritePhoto[action.payload] } };
    case 'DISPLAY_PHOTO_DETAILS':
      return { ...state, modalDisplayed: { displayed: true, selectedPhoto: action.payload } };
    case 'CLOSE_MODAL':
      return { ...state, modalDisplayed: { displayed: false, selectedPhoto: null } };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const initialState = {
    isFavouritePhoto: {},
    modalDisplayed: {
      displayed: false,
      selectedPhoto: null
    },
    photoData: [],
    topicData: []
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then((data) => dispatch({ type: actions.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => dispatch({ type: actions.SET_TOPIC_DATA, payload: data }));
  }, []);


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
    const selectedPhoto = state.photoData.find(photo => photo.id === photoId);

    if (selectedPhoto) {
      dispatch({ type: actions.DISPLAY_PHOTO_DETAILS, payload: selectedPhoto });
    } else {
      closeModal();
    }
  };

  return {
    state,
    isFavouritePhoto: state.isFavouritePhoto,
    favouritePhoto,
    favouriteCount,
    modalDisplayed: state.modalDisplayed,
    closeModal,
    displayPhotoModal
  };
};

export default useApplicationData;
