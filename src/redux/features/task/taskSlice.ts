import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low",
}


const initialState : InitialState = {
    tasks: [
        {
          "id": "task-001",
          "title": "Finish Project Proposal",
          "description": "Draft and finalize the project proposal for the client meeting, including budget and timeline.",
          "dueDate": "2025-03-25",
          "isCompleted": false,
          "priority": "high"
        }
      ],
    filter:"all"
}



const taskSlice = createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
      addTask : (state, action: PayloadAction<ITask>) => {
        state.tasks.push(action.payload);
      }
    }
})
 
export const selectTasks = (state : RootState) => {
    return state.taskR.tasks
}

export const selectTasksFilter = (state : RootState) => {
    return state.taskR.filter
}

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer; 