import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'cd-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchText = '';
  @Output() filterCars = new EventEmitter();
  @ViewChild('searchButton', {read: ElementRef, static: false}) button: ElementRef;

  onClick(event: Event) {
    console.log(event);
    this.doSearch(this.searchText);
  }

  private doSearch(searchTerm: string) {
    this.filterCars.emit(searchTerm);
  }
}
