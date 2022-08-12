import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const urlRM = `https://rickandmortyapi.com/api/location`

export const getAllLocations = createAsyncThunk(
    "GET_ALL_LOCATIONS",
    async () => {
        try {
            const result = await axios.get(urlRM)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
)

const locationsReducer = createReducer([], {
    [getAllLocations.fulfilled]: (state, action) => action.payload,
    [getAllLocations.rejected]: (state, action) => action.payload,
})

export default locationsReducer