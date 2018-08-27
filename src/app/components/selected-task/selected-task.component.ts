import { Component, OnInit } from "@angular/core";
import { TaskManagerService } from "../../services";

@Component({
  selector: "app-selected-task",
  templateUrl: "./selected-task.component.html",
  styleUrls: ["./selected-task.component.scss"]
})
export class SelectedTaskComponent implements OnInit {
  constructor(private taskManagerService: TaskManagerService) {}

  ngOnInit() {}
}
