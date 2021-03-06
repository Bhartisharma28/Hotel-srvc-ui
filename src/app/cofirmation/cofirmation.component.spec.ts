import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofirmationComponent } from './cofirmation.component';

describe('CofirmationComponent', () => {
  let component: CofirmationComponent;
  let fixture: ComponentFixture<CofirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
