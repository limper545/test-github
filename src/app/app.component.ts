import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advanced-angular';

  book: any = { };

  constructor(private http: HttpClient) {
    this.http.get('https://api.angular.schule/book/9783864906466')
      .subscribe(b => this.book = b);
  }
}
