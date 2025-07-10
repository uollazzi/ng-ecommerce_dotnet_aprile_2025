import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAdd } from './categoria-add';

describe('CategoriaAdd', () => {
  let component: CategoriaAdd;
  let fixture: ComponentFixture<CategoriaAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
