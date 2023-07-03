import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-projects-filter',
  templateUrl: './projects-filter.component.html',
  styleUrls: ['./projects-filter.component.css'],
  providers: [ProjectsService] // ProjectsService'i burada sağlayıcı olarak ekleyin

})
export class ProjectsFilterComponent {

  constructor(private projectsService: ProjectsService){}

  get advancedFilterOpenCloseToggle(){
    return this.projectsService.advancedFilterOpenCloseToggle
  }

  toggleAdvancedFilterOpenClose() {
    this.projectsService.advancedFilterOpenCloseToggle = !this.projectsService.advancedFilterOpenCloseToggle;
  }

  get programingFilterOpenCloseToggle(){
    return this.projectsService.programingFilterOpenCloseToggle
  }

  toggleProgramingFilterOpenClose() {
    this.projectsService.programingFilterOpenCloseToggle = !this.projectsService.programingFilterOpenCloseToggle;
  }

  get hostingFilterOpenCloseToggle(){
    return this.projectsService.hostingFilterOpenCloseToggle
  }

  toggleHostingFilterOpenClose(){
    this.projectsService.hostingFilterOpenCloseToggle = !this.projectsService.hostingFilterOpenCloseToggle
  }

  get ratingFilterOpenCloseToggle(){
    return this.projectsService.ratingFilterOpenCloseToggle
  }

  toggleRatingFilterOpenClose(){
    return this.projectsService.ratingFilterOpenCloseToggle = !this.projectsService.ratingFilterOpenCloseToggle
  }
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
