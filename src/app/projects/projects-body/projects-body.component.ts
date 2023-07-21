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

  get projectsArray(){
    return this.projectsService.projectsArray
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

