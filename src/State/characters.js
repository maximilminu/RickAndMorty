import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const urlRM = `https://rickandmortyapi.com/api/character/?page=`

export const getAllCharacters = createAsyncThunk(
    "GET_ALL_CHARACTERS",
    async (page) => {
        try {
            const characters = await axios.get(urlRM+page)
            return characters.data
        } catch(error){
            console.log(error)
        }
    }
)


const charactersReducer = createReducer([], {
    [getAllCharacters.fulfilled]: (state, action) =>  action.payload,
    [getAllCharacters.rejected]: (state, action) => action.payload,
})

export default charactersReducer