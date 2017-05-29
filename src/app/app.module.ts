import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { ProjectListService } from './project-list/services/project-list.service';
import { IssuesListService } from './issues-list/services/issues-list.service';
import { IssuesListComponent } from './issues-list/issues-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent,
    IssuesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProjectListService, IssuesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
