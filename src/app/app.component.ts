import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHomeWork';

  // tslint:disable-next-line:typedef
  onInputAction(){
    console.log(this.title);
  }
}
