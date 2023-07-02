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

  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
      
  }

  clickEvent(){
    console.log("clicked");
    this.messageEvent.emit(this.outputChildMessage);
  }
}
