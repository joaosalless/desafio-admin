import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-debug-data',
  templateUrl: './debug-data.component.html',
  styleUrls: ['./debug-data.component.scss']
})
export class DebugDataComponent implements OnInit {
  private data: any;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.data;
  }

}
