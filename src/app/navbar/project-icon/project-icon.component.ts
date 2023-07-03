import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.css']
})
export class ProjectIconComponent {
  @Input() darkTheme: boolean | undefined
}

