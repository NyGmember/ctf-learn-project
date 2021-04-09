import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countPlus(){
    this.count += 1
  }

  countMinus(){
    this.count -= 1
  }
}
