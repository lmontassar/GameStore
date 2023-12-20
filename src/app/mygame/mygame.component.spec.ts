import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygameComponent } from './mygame.component';

describe('MygameComponent', () => {
  let component: MygameComponent;
  let fixture: ComponentFixture<MygameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MygameComponent]
    });
    fixture = TestBed.createComponent(MygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
