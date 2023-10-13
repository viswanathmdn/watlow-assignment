import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() cocktailDetail: any;
  @Output() onClose = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
    this.onClose.emit();
  }

}
