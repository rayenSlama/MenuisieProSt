import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifemployeComponent } from './modifemploye.component';

describe('ModifemployeComponent', () => {
  let component: ModifemployeComponent;
  let fixture: ComponentFixture<ModifemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifemployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
