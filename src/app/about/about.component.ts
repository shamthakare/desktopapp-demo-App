import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data: any;

  constructor(private u: UserserviceService) { }

  ngOnInit(): void {
    this.getAllDataAvtar();
  }
  getAllDataAvtar() {
    this.u.getDataWithAvtar().subscribe((res) => {
      this.data = res.data;
      console.log("----data", this.data);
    });
  }      
}
