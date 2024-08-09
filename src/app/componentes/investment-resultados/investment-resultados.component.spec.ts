import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResultadosComponent } from './investment-resultados.component';

describe('InvestmentResultadosComponent', () => {
  let component: InvestmentResultadosComponent;
  let fixture: ComponentFixture<InvestmentResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentResultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
