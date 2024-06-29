import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loader: false,
  isModalOpen: false,
};

const appSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      console.log('first');
      return {
        ...state,
        isModalOpen: action.payload,
      };
    },
    set_loader: (state, action) => ({
      ...state,
      loader: action.payload,
    }),
  },
});

export const { toggleModal, set_loader } = appSlice.actions;
export default appSlice.reducer;
