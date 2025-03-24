import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types/types";

interface IProps {
    task: ITask
}

const TaskCard = ({task}: IProps) => {

    const dispatch = useAppDispatch();



    return (
        <div className="mb-2 border w-[40vw] text-left border-gray-300 p-5 rounded-sm">
            <p className="text-lg"><b>{task.title}</b></p> <br />
            <p className="text-gray-400">{task.id}</p> <br />
            <p>{task.description}</p> <br />
            <div className="text-gray-400">
                <p>{(task.isCompleted)? "Completed" : "Not Completed"}</p>
                <p className={cn({
                    "text-green-500": task.priority == "low",
                    "text-yellow-500": task.priority == "medium",
                    "text-red-400": task.priority == "high",
                })}>{task.priority} priority</p>
                <p>{task.dueDate}</p>
                <p>Assigned To {(task.assignTo)? `${task.assignTo}`:"No One"}</p>
            </div>
            <br />
            <div className="flex justify-between">
                <Button onClick={()=>dispatch(toggleCompleteState(task.id))}>{(!task.isCompleted ? "Done": "Undo")}</Button>
                <Button className="bg-red-200 text-black" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
            </div>
        </div>
    );
};

export default TaskCard;