import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'cd-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() filterCars = new EventEmitter();
  @ViewChild('button', {static: false}) button: ElementRef;

  searchText = '';

  constructor() {
  }

  onClick(event: Event) {
    this.doSearch(this.searchText);
  }

  private doSearch(searchTerm: string) {
    this.filterCars.emit(searchTerm);
  }
}
