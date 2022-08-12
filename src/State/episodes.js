import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const urlRM = `https://rickandmortyapi.com/api/episode`

export const getSingleEpisode = createAsyncThunk(
    "GET_SINGLE_EPISODE",
    async (episode) => {
        try {
            const result = await axios.get(`${episode}`)
            return result.data
        } catch(error){
            console.log(error)
        }
    }
)

export const getAllEpisodes = createAsyncThunk(
    "GET_ALL_EPISODES",
    async () => {
        try {
            const result = await axios.get(urlRM)
            return result.data
        } catch(error){
            console.log(error)
        }
    }
)


const episodeReducer = createReducer([], {
    [getAllEpisodes.fulfilled]: (state, action) =>  action.payload,
    [getAllEpisodes.rejected]: (state, action) => action.payload,

    [getSingleEpisode.fulfilled]: (state, action) =>  action.payload,
    [getSingleEpisode.rejected]: (state, action) => action.payload,
})

export default episodeReducer