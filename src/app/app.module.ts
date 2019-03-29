import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokeListComponent } from "./poke-list/poke-list.component";
import { HttpClientModule } from "@angular/common/http";
import { PokeDetailsComponent } from "./poke-details/poke-details.component";

@NgModule({
  declarations: [AppComponent, PokeListComponent, PokeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
