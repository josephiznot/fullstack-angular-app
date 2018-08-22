import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from "./app.component";
import {
  TaskManagerComponent,
  AddTaskComponent,
  SelectedTaskComponent,
  TasksComponent,
  NavBarComponent
} from "./components";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskManagerComponent,
    TasksComponent,
    SelectedTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
