import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'grid-list';
  products = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.fetchData().subscribe(
      (data: []) => {
        console.log(data);
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  clickedItem($event) {
    console.log($event);
  }
}
