import { Component, Input } from '@angular/core';
import { ResumeService} from '../services/resume/resume.service'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Input() darkTheme: boolean | undefined

  constructor(private resumeService: ResumeService){}

  get careerArray(){
    return this.resumeService.careerArray
  }
}
