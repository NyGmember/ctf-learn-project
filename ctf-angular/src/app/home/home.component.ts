import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  title:String;
  valueSearch:String;
  counts = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countNumber(){
    this.counts += 1
  }

}
