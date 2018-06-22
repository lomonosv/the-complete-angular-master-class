import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('is-change') change = new EventEmitter<FavoriteChangedEventArgs>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

  getClassName() {
    return this.isFavorite ?
      'glyphicon-star' : 'glyphicon-star-empty';
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
