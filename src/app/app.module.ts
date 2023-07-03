import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.components';
import { IntroComponent } from './intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsComponent } from './tools/tools.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectIconComponent } from './navbar/project-icon/project-icon.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsFilterComponent } from './projects/projects-filter/projects-filter.component';
import { FormsModule } from '@angular/forms';
import { ProjectsBodyComponent } from './projects/projects-body/projects-body.component';
import { ProjectsService } from './services/projects/projects.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ToolsComponent,
    LanguagesComponent,
    ProjectIconComponent,
    ResumeComponent,
    ProjectsComponent,
    ProjectsFilterComponent,
    ProjectsBodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
