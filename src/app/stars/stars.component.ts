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
    // this.stars = [false,false,false,false,false]
    this.stars = []
    for(let i = 1; i <= 5; i++){
      //如果某个商品的rating为3.5 那么这个商品的stars数组就是[false,false,false,true,true],就是前三个实心,后两个空心
      this.stars.push(i > this.rating)
    }
  }

}
