import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  isLoggedIn: boolean = false;
  userName: string = "Pradeep Rai";
  isAdmin: boolean = false;
  isMember:boolean = false;
  isGuest: boolean = false;

  loginCount: number = 0;
  countLoginclick() {
    this.loginCount ++;
    console.log(this.loginCount);

  }
}
