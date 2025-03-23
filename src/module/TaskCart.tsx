import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ITask } from "@/types/types";

interface IProps {
    task: ITask
}

const TaskCart = ({task}: IProps) => {



// console.log(task)


    return (
        <div className="mb-2 border w-[40vw] text-left border-gray-300 p-5 rounded-sm">
            <p className="text-lg"><b>{task.title}</b></p> <br />
            <p>{task.description}</p> <br />
            <div className="text-gray-400">
                <p>{(task.isCompleted)? "Completed" : "Not Completed"}</p>
                <p className={cn({
                    "text-green-500": task.priority == "low",
                    "text-yellow-500": task.priority == "medium",
                    "text-red-400": task.priority == "high",
                })}>{task.priority} priority</p>
                <p>{task.dueDate}</p>
            </div>
            <br />
            <Button>Done</Button>
        </div>
    );
};

export default TaskCart;