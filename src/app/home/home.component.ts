import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public name ='Duy';
public age = 10;
public traiCay =['tao', 'xoai', 'dua','cam', 'dua','quit'];
public traiCay2 =[{ten: 'tao', gia: 12, hagia: true},
                  {ten: 'nho' , gia: -3, hagia: false},
                  {ten: 'dua', gia : -6, hagia: true}];
  constructor() {}

  public ngOnInit(): void {
    console.log('trai cay =', this.traiCay);
  }

  public  resetName():void {
    console.log('resetName');
    this.name = '';
  }
}
