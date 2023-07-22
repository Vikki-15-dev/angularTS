import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],


})
export class DashboardComponent {
  grocery: any[];

  constructor() {
    this.grocery = [];
  }

  ngOnInit() {
    this.grocery = [
      {
        name: 'Almonds',
        price: 300,
        weight: '500 gm'
      },
      {
        name: 'Sugar',
        price: 40,
        weight: '1 kg'
      }
    ];
  }
  
}
