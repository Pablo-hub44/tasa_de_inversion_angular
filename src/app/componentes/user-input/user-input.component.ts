import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../model/investment-input.model';
import { InversionServiceService } from '../../servicios/inversion-service.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private inversionService: InversionServiceService){
  }
//sin signal
//@Output() calculate = new EventEmitter<InvestmentInput>();//emitir un evento de componente hijo al componente padre, de tipo investment interface q creamos
//con signal
//calculate = output<InvestmentInput>();


  //propiedaes sin signal
  //inversionInicial = '0';
  //inversionAnual = '0';
  //retornoEsperado= '5';
  //duracion = '10';

  //con signal
  inversionInicial = signal('0');
  inversionAnual = signal('0');
  retornoEsperado= signal('5');
  duracion = signal('10');


/**
 * metodo para enviar los datos del form 
 */
onSubmit() {
 console.log("enviado");
 console.log(this.inversionInicial);
 console.log(this.inversionAnual);
 console.log(this.retornoEsperado);
 console.log(this.duracion);
 
 //antes
 //this.calculate.emit({
  //initialInvestment: +this.inversionInicial(),//le asignamos los datos conseguimos del form, concatenandolo
  //duration: +this.duracion(),//el () para que envie loa datos y no como tal la la signal
  //expectedReturn: + this.retornoEsperado(),
  //annualInvestment: +this.inversionAnual()
 //});

  //ahora que usamos el servicio
  this.inversionService.calculateInvestmentResults({
    initialInvestment: +this.inversionInicial(),//le asignamos los datos conseguimos del form, concatenandolo
    duration: +this.duracion(),//el () para que envie loa datos y no como tal la la signal
    expectedReturn: + this.retornoEsperado(),
    annualInvestment: +this.inversionAnual()
  })

 //ahora que estamos usando signal (si no no se puede esto) asi podemos restablecer los valores
 this.inversionInicial.set('0');
 this.inversionAnual.set('0');
 this.retornoEsperado.set('5');
 this.duracion.set('10');
}

}
