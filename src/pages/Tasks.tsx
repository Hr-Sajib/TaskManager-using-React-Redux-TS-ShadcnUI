import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "@/module/AddTaskModal";
import TaskCart from "@/module/TaskCart";

const Tasks = () => {


    const tasks = useAppSelector(selectTasks)



    // console.log(tasks)


    return (
        <div className="flex">
            <div className=" mt-10 ">
                {
                    tasks.map(task => <TaskCart key={task.id} task={task}/>)
                }
            </div>
            <div className="mt-10 ml-[50vw] fixed">
                <AddTaskModal/>
            </div>
        </div>
    );
};

export default Tasks;