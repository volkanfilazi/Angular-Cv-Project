import { Component, Input } from '@angular/core';
import { ToolsService} from '../services/tools/tools.service'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  @Input() darkTheme: boolean | undefined

  constructor(private toolsService: ToolsService){}

  get toolsArray(){
    return this.toolsService.toolsArray
  }
}
