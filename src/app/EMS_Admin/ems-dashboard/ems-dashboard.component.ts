import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ems-dashboard',
  templateUrl: './ems-dashboard.component.html',
  styleUrls: ['./ems-dashboard.component.css']
})
export class EMSDashboardComponent implements OnInit {

  @Input() Total: number = 0
  @Input() Department: number = 0
  @Input() Approvals: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
