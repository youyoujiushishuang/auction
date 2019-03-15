import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  //定义一个数组,保存商品的数据,是Array<Product>类型的 , 然后在 ngOnInit方法里面初始化这个数组
  private products:Array<Product>
  constructor() { }

  ngOnInit() { //这个钩子会在组件被实例化之后调用一次
    this.products = [
      new Product(1,"第一个商品",199,3.5,"这是第一个商品,这是zngualr实现项目中的长长的一段描述",["电子商品","手机"]),
      new Product(1,"第二个商品",299,2.5,"这是第二个商品,这是zngualr实现项目中的长长的一段描述",["电子商品","电脑"]),
      new Product(1,"第三个商品",399,4.5,"这是第三个商品,这是zngualr实现项目中的长长的一段描述",["家具","沙发"]),
      new Product(1,"第四个商品",499,2.5,"这是第四个商品,这是zngualr实现项目中的长长的一段描述",["办公用品","文件夹"]),
      new Product(1,"第五个商品",599,1.5,"这是第五个商品,这是zngualr实现项目中的长长的一段描述",["装饰","彩灯"]),
      new Product(1,"第六个商品",699,3.5,"这是第六个商品,这是zngualr实现项目中的长长的一段描述",["办公用品","笔"]),
    ]
  }

}
//首先我们要自己定义一个类,存储商品的信息
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
