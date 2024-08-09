import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './componentes/header-component/header-component.component';
import { UserInputComponent } from "./componentes/user-input/user-input.component";
import { InvestmentInput } from './model/investment-input.model';
import { InvestmentResultadosComponent } from "./componentes/investment-resultados/investment-resultados.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, UserInputComponent, InvestmentResultadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasa_de_inversion_proyecto_2';

  //sin signals
  resultsData1?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

  //con signals
  resultsData = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] | undefined>(undefined);

  
}
