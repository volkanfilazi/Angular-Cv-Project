import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent implements OnInit {
  intro:string = "Intro";
  outputChildMessage:string = 'Message from chil component to parent';

  @Input() fromParent:string | undefined;
  @Input() fromParent2:string | undefined;
  @Input() darkTheme: boolean | undefined

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
      
  }
  
}
