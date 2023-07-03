import { Component, Input } from '@angular/core';
import { LanguagesService} from '../services/languages/languages.service'

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
@Input() darkTheme: boolean | undefined

constructor(private languagesService: LanguagesService){}

get languagesArray(){
  return this.languagesService.languagesArray
}
}
