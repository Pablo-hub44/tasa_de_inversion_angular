import { CurrencyPipe } from '@angular/common';
import { Component, Input, computed, inject, input } from '@angular/core';
import { InversionServiceService } from '../../servicios/inversion-service.service';

@Component({
  selector: 'app-investment-resultados',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-resultados.component.html',
  styleUrl: './investment-resultados.component.css'
})
export class InvestmentResultadosComponent {
  //pasar la info los datos del componente padre al hijo, sin signals
  @Input() results1?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];//sera un array de objetos

  //con signals <-- usando actualmente, ventaja hace que permite a angular actualizar este componente de manera mas eficiente
  //results = input<{
   // year: number,
    //interest: number,
    //valueEndOfYear: number,
    //annualInvestment: number,
    //totalInterest: number,
    //totalAmountInvested: number,
  //}[]>();


  //update, no estamos usando ninguno de los dos de arriba, pk se movio al service
  private inversionService = inject(InversionServiceService) //inyeccion de dependencia

  //forma 1 q funciona con signal
  //get resultados(){
    //return this.inversionService.resultData;
  //}

  //forma 2 con computed
  results = computed(() => this.inversionService.resultData());

  //forma 3
  //results = this.inversionService.resultData.asReadonly();//asReadonly metodo de angular
}
