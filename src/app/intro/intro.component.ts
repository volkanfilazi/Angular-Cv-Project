import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent implements OnChanges, OnDestroy {
  intro: string = "Intro";
  @Input() darkTheme: boolean | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  displayText: string = '';

  private timer: any; 

  ngOnInit(): void {
    this.introAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['darkTheme'] && !changes['darkTheme'].firstChange) {
      this.introAnimation();
    }
  }

  introAnimation() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    let animationText = 'Creative, patient and innovative';
    let i = 0;
    let lastIndex = 3;
    this.timer = setInterval(() => {
      if (i < animationText.length) {
        this.displayText = animationText.substring(0, i + 1);
        lastIndex = i;
      } else if (lastIndex > 0) {
        this.displayText = animationText.substring(0, lastIndex);
        lastIndex--;
      } else {
        this.displayText = '';
        i = 0;
        lastIndex = 0;
      }
      i++;
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}