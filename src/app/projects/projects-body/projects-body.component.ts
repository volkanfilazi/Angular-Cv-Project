import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';


@Component({
  selector: 'app-projects-body',
  templateUrl: './projects-body.component.html',
  styleUrls: ['./projects-body.component.css']
})
export class ProjectsBodyComponent {

  constructor(private projectsService: ProjectsService) { }

  like: boolean[] = new Array(this.projectsService.projectsArray.length).fill(false);

  likeUpdate(index: any) {
    this.like[index] = !this.like[index]
  }

  get copyProjects() {
    return this.projectsService.copyProjects
  }
}
