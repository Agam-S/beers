import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBeersComponent } from './get-all-beers.component';

describe('GetAllBeersComponent', () => {
  let component: GetAllBeersComponent;
  let fixture: ComponentFixture<GetAllBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
