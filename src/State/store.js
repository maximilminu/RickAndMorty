import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"

import charactersReducer from "./characters";
import episodeReducer from "./episodes";
import locationsReducer from "./locations"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
    reducer: {
        characters: charactersReducer,
        episode: episodeReducer,
        locations: locationsReducer,
    }
})

export default store