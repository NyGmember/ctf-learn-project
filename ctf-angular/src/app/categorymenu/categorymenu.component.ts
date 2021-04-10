import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorymenu',
  templateUrl: './categorymenu.component.html',
  styleUrls: ['./categorymenu.component.css']
})
export class CategorymenuComponent implements OnInit {

  categoryLists = [
    "Computer",
    "Electronics",
    "Toys",
    "Cloth",
    "Sport",
    "Adventure",
    "Games",
    "Hobies",
    "Assets",
    "Collections",
    "Services",
    "Hotel",
    "Movies",
    "Travel",
    "Secret"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
