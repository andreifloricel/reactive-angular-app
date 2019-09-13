import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { debounce, debounceTime, throttleTime } from "rxjs/operators";
import { CarsService } from "../../services/cars.service";

@Component({
  selector: "cd-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.scss"]
})
export class SearchBoxComponent implements AfterViewInit {
  searchText = "";
  @Output() filterCars = new EventEmitter();
  @ViewChild("searchButton", { read: ElementRef, static: false })
  searchButton: ElementRef;

  click$: Observable<Event>;

  constructor(private carsService: CarsService) {}

  doLuckySearch() {
    this.carsService.searchLucky(this.searchText);
  }

  ngAfterViewInit() {
    // initialize stream of clicks
    this.click$ = fromEvent(this.searchButton.nativeElement, "click");

    // handle click event
    this.click$
      .pipe(throttleTime(1000))
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
