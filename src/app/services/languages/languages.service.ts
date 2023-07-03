import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  languagesArray = [
    {
      name: 'Turkish',
      value: 100
    },
    {
      name: 'German',
      value: '75'
    },
    {
      name: 'English',
      value: '70'
    },
  ]
  constructor() { }
}
