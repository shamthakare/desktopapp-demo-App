import { UserserviceService } from '../userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private user: UserserviceService) {
  }
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.user.getData().subscribe((res) => {
      this.data = res.data;
    });
  }
}
