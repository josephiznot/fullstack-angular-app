import { Component } from "@angular/core";
import { TaskManagerService } from "../../services";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent {
  constructor(private taskManagerService: TaskManagerService) {}
}
