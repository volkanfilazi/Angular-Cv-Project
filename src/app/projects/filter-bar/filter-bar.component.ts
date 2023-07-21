import { Component, Input } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  constructor(private projectsService: ProjectsService){}
  @Input() darkTheme: boolean | undefined

  get vueSelected(){
    return this.projectsService.vue
  }

  get typescriptSelected(){
    return this.projectsService.typescript
  }

  get kotlinSelected(){
    return this.projectsService.kotlin
  }

  get ratingSelected(){
    return this.projectsService.ratingSelected
  }

  get hostingSelected(){
    return this.projectsService.hostingSelected
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
}
