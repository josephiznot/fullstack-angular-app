import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-manager",
  templateUrl: "./task-manager.component.html",
  styleUrls: ["./task-manager.component.scss"]
})
export class TaskManagerComponent implements OnInit {
  constructor() {}
  placeholder: String = "Enter new task...";
  tasks: string[] = [];
  val: string = "";

  addTask = () => {};

  ngOnInit() {}
}
