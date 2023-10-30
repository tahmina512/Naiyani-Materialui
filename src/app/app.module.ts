import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRoutingModule } from './app.routing.module';
import { DatabaseButtonComponent } from './database-button/database-button.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFormComponent } from './material-form/material-form.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DatabaseButtonComponent,
    DatabaseListComponent,
    MaterialFormComponent,
    DatabaseTableComponent,
  ],
  imports: [
    BrowserModule,
    HammerModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
