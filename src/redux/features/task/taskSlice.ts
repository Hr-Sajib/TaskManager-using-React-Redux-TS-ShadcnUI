import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

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
          "isCompleted": true,
          "priority": "high",
          "assignTo":"Sajib"
        }
      ],
    filter:"all"
}



const taskSlice = createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
      addTask : (state, action: PayloadAction<ITask>) => {
        const id: string = uuidv4();
        const finalData : ITask = {...action.payload,id}
        state.tasks.push(finalData);
      },
      toggleCompleteState : (state, action: PayloadAction<string>) => {
        state.tasks.forEach((task) => task.id == action.payload ? task.isCompleted = !task.isCompleted : null)
      },
      deleteTask : (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      },
      updateFilter: (state, action: PayloadAction<"all"|"low"|"medium"|"high">) => {
        state.filter = action.payload;
      },
      

    }
})
 
export const selectTasks = (state : RootState) => {

  const filter = state.taskR.filter;
  if(filter == "low"){
    return state.taskR.tasks.filter((task) => task.priority == "low")
  }
  else if(filter == "high"){
    return state.taskR.tasks.filter((task) => task.priority == "high")
  }
  else if(filter == "medium"){
    return state.taskR.tasks.filter((task) => task.priority == "medium")
  }

    return state.taskR.tasks
}

export const selectTasksFilter = (state : RootState) => {
    return state.taskR.filter
}

export const {addTask, toggleCompleteState, deleteTask, updateFilter} = taskSlice.actions;
export default taskSlice.reducer; 