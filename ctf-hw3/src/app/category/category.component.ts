import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catList = [
    {name : 'Electronics'},
    {name : 'Computer'},
    {name : 'Mobile'},
    {name : 'Book'},
    {name : 'Car'},
    {name : 'Sport'},
    {name : 'Games'},
    {name : 'Man'},
    {name : 'Woman'},
    {name : 'Kid'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
