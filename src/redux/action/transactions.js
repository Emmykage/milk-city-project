import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { baseUrl } from "../baseUrl"

const createTransaction =  createAsyncThunk ('transaction/create', async()=> {
    const response = await axios.post(baseUrl+"/transactions")
 
    return response
 
 })

 export {createTransaction}