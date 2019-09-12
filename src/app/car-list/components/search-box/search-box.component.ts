import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'cd-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output() filterCars = new EventEmitter();

  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;

  doSearch(event) {
    this.emitSearchEvent(event.target.value)
  }

  private emitSearchEvent(searchTerm: string) {
    this.filterCars.emit(searchTerm);
  }
}
