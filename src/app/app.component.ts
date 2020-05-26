import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advanced-angular';

  posts: any = {};

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(p => this.posts = p);
  }
}
