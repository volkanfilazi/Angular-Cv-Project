import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NavbarService } from '../services/navbar/navbar.service'

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

  constructor(private navbarService: NavbarService){}

  get navbarElements(){
    return this.navbarService.navbarElements
  }
}