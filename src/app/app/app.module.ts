import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponentComponent } from '../componentes/header-component/header-component.component';
import { UserInputComponent } from '../componentes/user-input/user-input.component';
import { InvestmentResultadosComponent } from '../componentes/investment-resultados/investment-resultados.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserInputModule } from '../componentes/user-input/user-input.module';



@NgModule({
 // declarations: [AppComponent,HeaderComponentComponent, InvestmentResultadosComponent ],
  imports: [
    //CommonModule, BrowserModule, UserInputModule
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }

//creado pero no usado , es mejor componentes independientes