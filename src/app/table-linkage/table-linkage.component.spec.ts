import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLinkageComponent } from './table-linkage.component';

describe('TableLinkageComponent', () => {
  let component: TableLinkageComponent;
  let fixture: ComponentFixture<TableLinkageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLinkageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLinkageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
