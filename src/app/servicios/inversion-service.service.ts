import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from '../model/investment-input.model';

@Injectable({
  providedIn: 'root'
})
export class InversionServiceService {
  //usando signal
  resultData= signal<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined> (undefined);//sera un array de objetos

  constructor() { }
  
  
  calculateInvestmentResults(data:InvestmentInput) {//del tipo que creamos


    //inicializamos objeto data con los componentes
    const {initialInvestment, annualInvestment,expectedReturn,duration}= data;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);
    
    //sin signal
    //eturn this.resultData = annualData;

    //con signal
    return this.resultData.set(annualData);
  }
  
}
