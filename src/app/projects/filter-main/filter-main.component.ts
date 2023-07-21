import { Component, Input } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-filter-main',
  templateUrl: './filter-main.component.html',
  styleUrls: ['./filter-main.component.css']
})
export class FilterMainComponent {
  constructor(private projectsService: ProjectsService){}
  @Input() darkTheme: boolean | undefined

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

  get hostingSelectedValue(){
    return this.projectsService.hostingSelected
  }
  
  get ratingSelectedValue(){
    return this.projectsService.ratingSelected
  }

 
  get projectsArray(){
    return this.projectsService.projectsArray
  }

  get vueSelected(){
    return this.projectsService.vue
  }

  onVueSelectedChange(event: any) {
    this.projectsService.vue = event.target.checked;
    this.projectsService.vueFilter()   
  }

  get typescriptSelected(){
    return this.projectsService.typescript
  }

  onTypescriptSelectedChange(event: any){
    this.projectsService.typescript = event.target.checked
    this.projectsService.typescriptFilter()   
  }

  get kotlinSelected(){
    return this.projectsService.kotlin
  }

  onKotlinSelectedChange(event: any){
    this.projectsService.kotlin = event.target.checked
    this.projectsService.kotlinFilter()   
  }

  get mainFilterToggle(){
    return this.projectsService.mainFilterToggle
  }

  get hostingSelected(){
    return this.projectsService.hostingSelected
  }

  onHostingSelectedChange(value: string) {
    this.projectsService.hostingSelected = value;
    this.projectsService.selectedHosting()
  }

  get ratingSelected(){
    return this.projectsService.ratingSelected
  }

  onRatingSelectedChange(value: string) {
    this.projectsService.ratingSelected = value;
    this.projectsService.selectedRating()
  }
}
