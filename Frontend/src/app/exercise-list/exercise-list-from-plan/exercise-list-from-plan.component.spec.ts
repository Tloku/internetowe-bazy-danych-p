import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListFromPlanComponent } from './exercise-list-from-plan.component';

describe('ExerciseListFromPlanComponent', () => {
  let component: ExerciseListFromPlanComponent;
  let fixture: ComponentFixture<ExerciseListFromPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseListFromPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseListFromPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
