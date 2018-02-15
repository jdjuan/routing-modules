import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaviviendaLoginComponent } from './davivienda-login.component';

describe('DaviviendaLoginComponent', () => {
  let component: DaviviendaLoginComponent;
  let fixture: ComponentFixture<DaviviendaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaviviendaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaviviendaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
