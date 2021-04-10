import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input() todoText:String;

  listCount = 0;
  todolists = [];

  constructor() { }

  ngOnInit(): void {
  }

  newList(){
    this.todolists.push(this.todoText);
    this.listCount = this.todolists.length;
  }

  delList(inx){
    this.todolists.splice(inx, 1)
    this.listCount = this.todolists.length;
  }

}
