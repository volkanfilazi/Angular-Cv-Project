import { Component, ChangeDetectorRef, Input  } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-projects-body',
  templateUrl: './projects-body.component.html',
  styleUrls: ['./projects-body.component.css']
})

export class ProjectsBodyComponent {

  constructor(private projectsService: ProjectsService, private changeDetectorRef: ChangeDetectorRef) { }
  @Input() darkTheme: boolean | undefined
  
  like: boolean[] = new Array(this.projectsService.projectsArray.length).fill(false);

  get hostingSelectedValue(){
    return this.projectsService.hostingSelected
  }
  
  get ratingSelectedValue(){
    return this.projectsService.ratingSelected
  }

  get advancedFilterOpenCloseToggle(){
    return this.projectsService.advancedFilterOpenCloseToggle
  }

  get unselectVue(){
    return this.projectsService.unselectVueFromFilterBar()
  }
  get unselectTypescript(){
    return this.projectsService.unselectTypescriptFromFilterBar()
  }
  get unselectKotlin(){
    return this.projectsService.unselectKotlinFromFilterBar()
  }

  get unselectHosting(){
    return this.projectsService.unselectHostingFromFilterBar()
  }

  get unselectRating() {
    return this.projectsService.unselectRatingFromFilterBar()
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
 
  trackByFn(index: number, item: any): any {
    return item.name;
  }
  
  ngOnInit() {
    const storedLike = localStorage.getItem('angularLike');
    this.like = storedLike ? JSON.parse(storedLike) : Array(this.projectsArray.length).fill(false);
  }
  likeUpdate(index: any) {
    this.like[index] = !this.like[index];
    
    if (this.like[index]) {
      this.projectsArray[index].numberOfLikes+1;
    } else {
      this.projectsArray[index].numberOfLikes-1;
    }
  
    localStorage.setItem('angularLike', JSON.stringify(this.like));
  }

  get copyProjects() {
    return this.projectsService.copyProjects
  }
}

