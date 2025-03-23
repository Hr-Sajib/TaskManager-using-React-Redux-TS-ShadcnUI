import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "@/module/AddTaskModal";
import TaskCart from "@/module/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {


    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()




    return (
        <div className="flex ">
            <div className="mt-10">
                <div className="flex justify-between">
                    <Tabs defaultValue="all" className="w-[32vw] mb-5">
                        <TabsList>
                            <TabsTrigger onClick={()=>dispatch(updateFilter('all'))} className="mr-1" value="all">All</TabsTrigger>
                            <TabsTrigger onClick={()=>dispatch(updateFilter('high'))} className="mr-1" value="high">High Priority</TabsTrigger>
                            <TabsTrigger onClick={()=>dispatch(updateFilter('medium'))} className="mr-1" value="medium">Medium Priority</TabsTrigger>
                            <TabsTrigger onClick={()=>dispatch(updateFilter('low'))} className="mr-1" value="low">Low Priority</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="">
                        <AddTaskModal/>
                    </div>
                </div>
                {
                    tasks.map(task => <TaskCart key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default Tasks;