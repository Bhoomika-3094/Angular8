import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelexampleComponent } from './modelexample.component';

describe('ModelexampleComponent', () => {
  let component: ModelexampleComponent;
  let fixture: ComponentFixture<ModelexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
