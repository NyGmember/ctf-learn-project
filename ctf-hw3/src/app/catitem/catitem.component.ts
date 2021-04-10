import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catitem',
  templateUrl: './catitem.component.html',
  styleUrls: ['./catitem.component.css']
})
export class CatitemComponent implements OnInit {

  @Input() cat:String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
