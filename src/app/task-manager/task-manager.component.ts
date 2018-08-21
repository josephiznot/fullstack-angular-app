import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-manager",
  templateUrl: "./task-manager.component.html",
  styleUrls: ["./task-manager.component.scss"]
})
export class TaskManagerComponent implements OnInit {
  placeholder: String = "Enter new task...";
  imgUrl: string = "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg";
  tasks: string[] = [];
  constructor() {}
  addTask = val => {
    this.tasks.push(val);
  };

  ngOnInit() {}
}
