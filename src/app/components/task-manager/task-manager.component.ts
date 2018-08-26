import { Component } from "@angular/core";
import { TaskManagerService } from "../../services/task-manager.service";
@Component({
  selector: "app-task-manager",
  templateUrl: "./task-manager.component.html",
  styleUrls: ["./task-manager.component.scss"]
})
export class TaskManagerComponent {
  constructor(public taskManagerService: TaskManagerService) {}
}
