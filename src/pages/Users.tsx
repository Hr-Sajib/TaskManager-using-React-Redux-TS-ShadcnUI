import { Button } from "@/components/ui/button";
import { deleteUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AddUserModal } from "@/module/AddUserModal";
const Users = () => {

    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch()

    console.log(users)
    return (
        <div className="flex gap-10">
            <div>
                {
                    users.map((user)=><div key={user.id} className="border p-2 rounded-sm mb-2 w-[30vw] text-left flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Id: {user.id}</p>
                            <p className="font-bold text-lg mt-2">{user.name}</p>
                        </div>
                        <div className="flex gap-1">
                            <Button onClick={()=>dispatch(deleteUser(user.id))} className="bg-red-200 text-black hover:text-white">Delete User</Button>
                        </div>
                    </div>)
                }
            </div>
            <div className="">
                <AddUserModal/>
            </div>
        </div>
    );
};

export default Users;