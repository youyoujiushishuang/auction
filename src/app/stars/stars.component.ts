import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit {

  //显示五颗星星,需要一个含有五个元素的数组
  private stars:boolean[];

  //需要商品组件中的星级评价数据,要从父组件中接收数据
  @Input()
  private rating:number = 0

  constructor() { }

  ngOnInit() {
    this.stars = [false,false,false,false,false]
  }

}
