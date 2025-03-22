import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TaskCart from "@/module/taskCart";

const Tasks = () => {


    const tasks = useAppSelector(selectTasks)
    // const filter = useAppSelector(selectTasksFilter)


    console.log(tasks)


    return (
        <div className=" mt-10 ">
            {
                tasks.map(task => <TaskCart task={task}/>)
            }
        </div>
    );
};

export default Tasks;