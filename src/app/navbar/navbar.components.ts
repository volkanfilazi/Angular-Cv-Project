import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.components.html',
})

export class NavbarComponent {
  @Input() darkTheme: boolean | undefined  
  @Output() darkThemeToggled = new EventEmitter<void>();

  toggleDarkTheme() {
    this.darkThemeToggled.emit();
  }
}