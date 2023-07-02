import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Angular-Starting';
  isDarkTheme: boolean = false;
  testTitle: string = 'testing';
  testTitle2: string = 'testing2';

  ngOnInit() {
    const storedTheme = localStorage.getItem('darkTheme');
    this.isDarkTheme = storedTheme === 'true';
  }

  darkThemeActive(){
    this.isDarkTheme = !this.isDarkTheme
    localStorage.setItem('darkTheme', this.isDarkTheme.toString());
  }
}
