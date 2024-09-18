import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Nav Components Page...</h1>`,
    styles:'h1{color:black}',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class AppNavbar{}