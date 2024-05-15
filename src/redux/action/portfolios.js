import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { baseUrl } from "../baseUrl"

const createPortfoio =  createAsyncThunk ('portfolio/create', async()=> {
    const response = await axios.post(baseUrl+"/portfolios")
 
    return response
 
 })

 export {createPortfoio}