import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watlow-assignment';
  constructor(private router: Router,) { }

  home() {
    this.router.navigate([''])
  }
}
