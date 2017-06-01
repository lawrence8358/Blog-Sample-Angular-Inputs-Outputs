import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  strToChild = '我是父模板的資料'; //父親模板的初始值
  strFormChild = ''; //<==兒子的回傳值的顯示屬性

  //Child模板事件發生時，會呼叫此方法回傳值
  onListenChild($event: any) {
    this.strFormChild = $event as string;
  }
}
