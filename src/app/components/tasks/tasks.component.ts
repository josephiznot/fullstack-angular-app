import { Component, OnInit } from "@angular/core";
import { TaskManagerService } from "../../services";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  constructor(public taskManagerService: TaskManagerService) {}
  ngOnInit() {}
  handleCheck = id => {
    console.log(this.taskManagerService.selectedTask);
    //display checkmark before executing completion
    setTimeout(() => this.taskManagerService.completeTask(id), 500);
  };
}
