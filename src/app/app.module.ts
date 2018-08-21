import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
