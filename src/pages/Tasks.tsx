import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TaskCart from "@/module/taskCart";
import { AddTaskModal } from "@/module/AddTaskModal";

const Tasks = () => {


    const tasks = useAppSelector(selectTasks)
    // const filter = useAppSelector(selectTasksFilter)


    console.log(tasks)


    return (
        <div>
            <div className=" mt-10 ">
                {
                    tasks.map(task => <TaskCart key={task.id} task={task}/>)
                }
            </div>
            <div>
                <AddTaskModal/>
            </div>
        </div>
    );
};

export default Tasks;