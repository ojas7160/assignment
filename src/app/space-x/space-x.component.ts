import { SpaceXService } from './../space-x.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent implements OnInit {

  spaceXData: any = [];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.spaceXService.getSpaceXData(100)
    .subscribe(res => {
      this.spaceXData = res;
      this.spaceXData = this.spaceXData.slice(0, 8)
    })
  }

}
