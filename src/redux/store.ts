import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import logger from "./middlewares/logger";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
    
    devTools: {
        name: "Vite+React+TS",
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

