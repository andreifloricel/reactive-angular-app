import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: "cd-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements AfterViewInit {
  searchText = "";
  @Output() filterCars = new EventEmitter();
  @ViewChild("searchButton", {read: ElementRef, static: false})
  searchButton: ElementRef;

  click$: Observable<Event>;

  ngAfterViewInit() {
    this.click$ = fromEvent(this.searchButton.nativeElement, "click");

    this.click$
      .subscribe(clickEvent => this.onClick(clickEvent));
  }

  onClick(event: Event) {
    console.log(event);
    this.doSearch(this.searchText);
  }

  private doSearch(searchTerm: string) {
    this.filterCars.emit(searchTerm);
  }
}
