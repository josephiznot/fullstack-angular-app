import { Injectable } from "@angular/core";
import Task from "../components/task";

@Injectable({
  providedIn: "root"
})
export class TaskManagerService {
  constructor() {}
  newTask: string = "";
  tasks: Task[] = [];
  completedTasks: Task[] = [];
  id: number = 1;
  selectedTask: Task;

  addTask = () => {
    this.tasks.push(new Task(this.id, this.newTask, false));
    this.newTask = "";
    this.id++;
  };
  completeTask = (id: number) => {
    /*
    Add task to list of completed tasks &
    delete it from list of tasks.
    */
    let index = this.tasks.findIndex(e => e.id == id);
    this.completedTasks.push(this.tasks[index]);
    this.tasks.splice(index, 1);
  };
  editTask = (id, editedTask) => {
    let index = this.tasks.findIndex(e => e.id == id);
    this.tasks[index].task = editedTask;
  };
}
