import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

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
        },
        {
          "id": "task-002",
          "title": "Grocery Shopping",
          "description": "Buy milk, bread, eggs, and vegetables for the week.",
          "dueDate": "2025-03-23",
          "isCompleted": true,
          "priority": "medium"
        },
        {
          "id": "task-003",
          "title": "Update Resume",
          "description": "Add recent job experience and skills to the resume for job applications.",
          "dueDate": "2025-03-28",
          "isCompleted": false,
          "priority": "low"
        },
        {
          "id": "task-004",
          "title": "Team Standup Meeting",
          "description": "Prepare notes for the daily standup and update the team on progress.",
          "dueDate": "2025-03-22",
          "isCompleted": false,
          "priority": "high"
        },
        {
          "id": "task-005",
          "title": "Read Documentation",
          "description": "Review the new API docs for integrating the payment gateway.",
          "dueDate": "2025-03-26",
          "isCompleted": false,
          "priority": "medium"
        }
      ],
    filter:"all"
}



const taskSlide = createSlice({
    name:'taskSlice',
    initialState,
    reducers:{

    }
})
 
export const selectTasks = (state : RootState) => {
    return state.taskR.tasks
}

export const selectTasksFilter = (state : RootState) => {
    return state.taskR.filter
}


export default taskSlide.reducer;