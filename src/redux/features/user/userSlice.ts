import { RootState } from "@/redux/store";
import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    users: IUser[];
}


const initialState : InitialState = {
    users: [
        {
          "id": "u1",
          "name": "Sajib",
        },
        {
          "id": "u2",
          "name": "Ifty",
        }
      ],
}



const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
      addUser : (state, action: PayloadAction<IUser>) => {
        const id: string = uuidv4();
        const finalData : IUser = {...action.payload,id}
        state.users.push(finalData);
      },
      deleteUser : (state, action: PayloadAction<string>) => {
        state.users = state.users.filter((user) => user.id !== action.payload)
      },
      

    }
})
 
export const selectUsers = (state : RootState) => {
    return state.userR.users
}



export const {addUser,deleteUser} = userSlice.actions;
export default userSlice.reducer; 