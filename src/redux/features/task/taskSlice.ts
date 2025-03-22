import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[];
}


const initialState : InitialState = {
    task: [
            {
                id:"1",
                title:"Initialize frontend",
                description:"Create....",
                dueDate:"2015-11",
                isCompleted:false,
                priority:"high"
            },
            {
                id:"2",
                title:"End frontend",
                description:"CreaEte....",
                dueDate:"2015-11",
                isCompleted:false,
                priority:"high"
            }
        ]
}

const taskSlide = createSlice({
    name:'taskSlice',
    initialState,
    reducers:{

    }
})


export default taskSlide.reducer;