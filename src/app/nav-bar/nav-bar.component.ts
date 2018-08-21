import { Component, OnInit, NgModule } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor() {}
  title: String = "Joe's Todo App";
  ngOnInit() {}
}
