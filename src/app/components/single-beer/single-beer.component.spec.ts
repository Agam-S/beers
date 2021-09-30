import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBeerComponent } from './single-beer.component';

describe('SingleBeerComponent', () => {
  let component: SingleBeerComponent;
  let fixture: ComponentFixture<SingleBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
