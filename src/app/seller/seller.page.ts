import { Seller } from './../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.page.html',
  styleUrls: ['./seller.page.scss'],
})
export class SellerPage implements OnInit {
  public seller: Seller = {
    name: 'Wilson Aguilar',
    image: 'assets/me.jpg',
    code: 1224634,
    phone: '0987014414',
    email: 'waguilars@est.ups.edu.ec',
  };

  constructor() {}

  ngOnInit() {}
}
