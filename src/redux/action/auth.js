import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const token = () => JSON.parse(localStorage.getItem('mmpc_auth')).token;

const registerUser = createAsyncThunk('users/register', async ({ data }, {rejectWithValue}) => {

  try {
    // const response = await axios.post(`${baseUrl}/user`);
    const response = await fetch(`${baseUrl}users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)

    })

    if(!response.ok){
      const err = await response.json()
      return rejectWithValue(err)

    }
    const result = await response.json()

    return result
    
  } catch (error) {
    return rejectWithValue({message: "Something went wrong"})
    
  }

});


const userSession = createAsyncThunk('users/session', async ({ data }, {rejectWithValue}) => {

  try {
    // const response = await axios.post(`${baseUrl}/user`);
    const response = await fetch(`${baseUrl}users/session`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)

    })

    if(!response.ok){
      const err = await response.json()
      return rejectWithValue(err)

    }
    const result = await response.json()

    return result
    
  } catch (error) {
    return rejectWithValue({message: "Something went wrong"})
    
  }

});

const userProfile = createAsyncThunk('users/profile', async (_, {rejectWithValue}) => {

  try {
    const response = await fetch(`${baseUrl}users/profile`, {
      headers: {
        "Content-type": "application/json"
      }

    })

    if(!response.ok){
      const err = await response.json()
      return rejectWithValue(err)

    }
    const result = await response.json()

    return result
    
  } catch (error) {
    return rejectWithValue({message: "Something went wrong"})
    
  }

});

export { registerUser, userSession, userProfile };
