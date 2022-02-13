import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipeListComponent } from './all-recipe-list.component';

describe('AllRecipeListComponent', () => {
  let component: AllRecipeListComponent;
  let fixture: ComponentFixture<AllRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
