import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerStructureComponent } from './beer-structure.component';

describe('BeerStructureComponent', () => {
  let component: BeerStructureComponent;
  let fixture: ComponentFixture<BeerStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
