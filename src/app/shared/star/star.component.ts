import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick() {
    console.log(`The rating ${this.rating} was clicked`);
    this.notify.emit(`The rating ${this.rating} was clicked`);
  }
}
