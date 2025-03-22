import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import taskReducer from "./features/task/taskSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
    }, 
    
    devTools: {
        name: "Vite+React+TS",
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

