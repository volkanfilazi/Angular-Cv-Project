import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.components';
import { IntroComponent } from './intro/intro.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
