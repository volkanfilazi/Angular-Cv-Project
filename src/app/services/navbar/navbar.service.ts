import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {

  navbarElements = [
    {
      name: 'Intro',
      link: '#intro'
    },
    {
      name: 'Tools',
      link: '#tools'
    },
    {
      name: 'Languages',
      link: '#languages'
    },
    {
      name: 'Resume',
      link: '#resume'
    },
    {
      name: 'Projects',
      link: '#projects'
    },
  ]

  
  constructor() { }
}
