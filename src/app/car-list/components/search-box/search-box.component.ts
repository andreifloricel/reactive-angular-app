import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'cd-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() filterCars = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doSearch(ev) {
    this.filterCars.emit(ev.target.value);
  }

}
