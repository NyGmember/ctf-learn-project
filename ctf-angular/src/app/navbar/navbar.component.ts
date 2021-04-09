import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'NavBar',
      },
      {
        label: 'Product',
        items: [
            {label: 'Product 1', icon: 'pi pi-ticket'},
            {label: 'Product 2', icon: 'pi pi-tablet'}
        ]
      },
      {
          label: 'About us',
          items: [
              {label: 'Who am I', icon: 'pi pi-users'},
              {label: 'Contact us', icon: 'pi pi-envelope'}
          ]
      }
    ];
  }

}
