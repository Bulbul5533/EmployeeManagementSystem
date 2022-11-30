import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ems-filter',
  templateUrl: './ems-filter.component.html',
  styleUrls: ['./ems-filter.component.css']
})
export class EMSFilterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  Searchedvalue: string = '';

  @Output() Searchedtext: EventEmitter<string> = new EventEmitter<string>();

  TxtChanged() {
    this.Searchedtext.emit(this.Searchedvalue)
  }
}
