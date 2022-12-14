import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAnimViewComponent } from './no-anim-view.component';

describe('NoAnimViewComponent', () => {
  let component: NoAnimViewComponent;
  let fixture: ComponentFixture<NoAnimViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAnimViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAnimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
