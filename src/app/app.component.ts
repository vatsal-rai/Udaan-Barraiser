import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Udaan-MC-App';

  ngOnInit(): void {
    console.log("test app comp , this should remain");
  }
}
