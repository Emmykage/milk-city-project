import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const token = () => JSON.parse(localStorage.getItem('mmpc_auth')).token;

const registerUser = createAsyncThunk('users/register', async ({ data }) => {
  const response = await axios.post(`${baseUrl}/user`);

  return response;
});

export { registerUser };
