import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const urlRM = `https://rickandmortyapi.com/api/`

export const getAllInfo = createAsyncThunk(
    "GET_ALL_INFO",
    async (type, pageNum) => {
        try {
            const result = await axios.get(`${urlRM}/${type}/page${pageNum}`)
            return result.data
        } catch(error){
            console.log(error)
        }
    }
)


const InfoReducer = createReducer([], {
    [getAllInfo.fulfilled]: (state, action) =>  action.payload,
    [getAllInfo.rejected]: (state, action) => action.payload,
})

export default InfoReducer