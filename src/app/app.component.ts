import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang';
  notFound: boolean;

  constructor(private location: Location) {}

  getLocation() : void {
    const routes = ['', '/company', '/notices', '/products', '/contact'];
    this.notFound = routes.includes(this.location.path());
  }
}
