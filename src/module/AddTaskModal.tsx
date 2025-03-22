import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ITask } from "@/types/types";
import { useForm, SubmitHandler } from "react-hook-form";

export function AddTaskModal() {
  const { register, handleSubmit, reset } = useForm<ITask>({
    defaultValues: {
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "medium",
      isCompleted: false,
    },
  });

  const onSubmit: SubmitHandler<ITask> = (data) => {
    const newTask: ITask = {
      id: `task-${Date.now()}`,
      title: data.title,
      description: data.description || "",
      dueDate: data.dueDate,
      isCompleted: false,
      priority: data.priority,
    };
    console.log("New Task:", newTask);
    reset({
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "medium",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-5">
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Add new task with providing all the task information.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                {...register("description")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dueDate" className="text-right">
                Due Date
              </Label>
              <Input
                id="dueDate"
                type="date"
                {...register("dueDate", { required: true })}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <div className="col-span-3 flex gap-3 ml-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="high"
                    value="high"
                    {...register("priority", { required: true })}
                  />
                  <Label htmlFor="high">High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="medium"
                    value="medium"
                    {...register("priority", { required: true })}
                  />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="low"
                    value="low"
                    {...register("priority", { required: true })}
                  />
                  <Label htmlFor="low">Low</Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
