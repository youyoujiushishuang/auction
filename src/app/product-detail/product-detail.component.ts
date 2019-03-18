import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  //商品详情组件需要商品标题和商品图片,这里的图片我们定死了,就声明一个商品标题就行
  productTitle:string
  //需要在router中获取到跳转过来时传递过来的参数
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    //初始化商品详情数据
    this.productTitle = this.routeInfo.snapshot.params["productTitle"]
  }

}
