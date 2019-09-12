import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { CompiledFile } from '@angular/compiler-cli/ngcc/src/analysis/types';

@Component({
  selector: 'cd-dashboard',
  template: 'this is an input',
})
class DashboardMockComponent {
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardMockComponent,
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.debugElement.componentInstance;

      });
  }));


  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('should render the dashboard', () => {
    const template = fixture.nativeElement;
    expect(template.textContent).toContain('this is an input');
    expect(template.innerHTML).toContain('this is an input');
  });
});
