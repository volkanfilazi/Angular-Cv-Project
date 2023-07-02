import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Starting';
  testTitle: string = 'testing';
  testTitle2: string = 'testing2';



  reciveMessage($event: any){
    console.log($event);
  }

}
