import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angular-app dynamically';
  isDisabled: boolean = false;
  userName: string = 'Pradeep Rai';

  updateUserName(username: HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
  }

  btnClick() {
    alert('clicked......');
  }

  keyUpEventA() {
    console.log('key up a ....');
  }

  keyUpEventParam(user:HTMLInputElement) {
    console.log(user.id);
  }
}
