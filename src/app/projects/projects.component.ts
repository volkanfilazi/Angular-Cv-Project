import { Component, Input } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() darkTheme: boolean | undefined
  constructor(private projectsService: ProjectsService){}

  
  get projectsArray(){
    return this.projectsService.projectsArray
  }

  get vueSelected(){
    return this.projectsService.vue
  }

  onVueSelectedChange(event: any) {
    this.projectsService.vue = event.target.checked;
  }

  get typescriptSelected(){
    return this.projectsService.typescript
  }

  onTypescriptSelectedChange(event: any){
    this.projectsService.typescript = event.target.checked
  }

  get kotlinSelected(){
    return this.projectsService.kotlin
  }

  onKotlinSelectedChange(event: any){
    this.projectsService.kotlin = event.target.checked
  }

  get mainFilterToggle(){
    return this.projectsService.mainFilterToggle
  }

  get hostingSelected(){
    return this.projectsService.hostingSelected
  }

  onHostingSelectedChange(value: string) {
    this.projectsService.hostingSelected = value;
  }

  get ratingSelected(){
    return this.projectsService.ratingSelected
  }

  onRatingSelectedChange(value: string) {
    this.projectsService.ratingSelected = value;
  }
}
