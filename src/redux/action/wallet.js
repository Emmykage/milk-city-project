import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const createWallet = createAsyncThunk('wallet/create', async () => {
  const response = await axios.post(`${baseUrl}/wallets`);

  return response;
});

export { createWallet };
