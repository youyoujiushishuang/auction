import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit {

  //显示五颗星星,需要一个含有五个元素的数组
  private stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [false,false,false,false,false]
  }

}
