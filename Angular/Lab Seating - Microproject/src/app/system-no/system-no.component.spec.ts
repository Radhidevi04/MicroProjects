import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNoComponent } from './system-no.component';

describe('SystemNoComponent', () => {
  let component: SystemNoComponent;
  let fixture: ComponentFixture<SystemNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
