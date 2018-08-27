import { Component, OnInit } from "@angular/core";
import { TaskManagerService } from "../../services";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  date: string;
  error: boolean;
  constructor(private taskManagerService: TaskManagerService) {}
  ngOnInit() {
    this.date = new Date().toString().slice(0, 10);
  }
}
