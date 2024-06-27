import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const createAsset = createAsyncThunk('asset/create', async () => {
  const response = await axios.post(`${baseUrl}/assets`);

  return response;
});

export { createAsset };
