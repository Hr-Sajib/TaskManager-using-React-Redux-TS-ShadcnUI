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
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { IUser } from "@/types/types";
import { useAppDispatch } from "@/redux/hook";
import { addUser } from "@/redux/features/user/userSlice";
import { useState } from "react";




export function AddUserModal() {

  const form = useForm<IUser>();
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (data : IUser) => {
    dispatch(addUser(data))
    setOpen(false)
    form.reset();
  };

  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription className="sr-only">
            Add new task with providing all the task information.
          </DialogDescription>
        </DialogHeader>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

            <FormField
            
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""}/>
                  </FormControl>
                </FormItem>
              )}
            />


       
           
          <DialogFooter className="">
            <Button type="submit">Save</Button>
          </DialogFooter>

          </form>
          </Form>

      </DialogContent>
    </Dialog>
  );
}
