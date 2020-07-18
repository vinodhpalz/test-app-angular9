import { Component } from '@angular/core';
import { cubefn } from 'cube';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = cubefn(5);
}
