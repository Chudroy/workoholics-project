import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  tShirtImageSource = '../assets/Tshirt1.png';
  constructor() {}

  ngOnInit(): void {}

  changeTShirtImage(colour: string) {
    switch (colour) {
      case 'black':
        this.tShirtImageSource = '../assets/Tshirt2.png';
        break;
      case 'pink':
        this.tShirtImageSource = '../assets/Tshirt1.png';
        break;
      default:
        throw Error('invalid colour string');
    }
  }
}
