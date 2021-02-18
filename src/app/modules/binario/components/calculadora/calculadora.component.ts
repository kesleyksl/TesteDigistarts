import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  primeiroNumero: FormControl;
  segundoNumero : FormControl;
  operador: FormControl;
  resultado: string;
  constructor() { }

  ngOnInit(): void {
    this.criarCampos();
  }

  calcular(){
    let primeiroNumero = this.binarioParaDecimal(this.primeiroNumero.value);
    let segundoNumero = this.binarioParaDecimal(this.segundoNumero.value);
    let retorno;
    switch(this.operador.value){
      case '+':
        retorno = this.decimalParaBinario(primeiroNumero + segundoNumero);
        this.resultado = retorno;
        break;
      case '-':
        retorno = this.decimalParaBinario(primeiroNumero - segundoNumero);
        this.resultado = retorno;
        break;
      case '*':
        retorno =  this.decimalParaBinario(primeiroNumero - segundoNumero);
        this.resultado = retorno;
        break
      case '%':
        retorno = this.decimalParaBinario(primeiroNumero % segundoNumero);
        this.resultado =  retorno;
        break
      case '/':
        if(segundoNumero === 0){
          this.resultado = 'Divisão por 0';
          break;
        }
        retorno = this.decimalParaBinario(primeiroNumero / segundoNumero);
        this.resultado = retorno;
          break;
    }
  }
  binarioParaDecimal(binario: string){
    let retorno = parseInt(binario, 2);
    return retorno;
  }
  decimalParaBinario(decimal: number){
    let retorno = decimal.toString(2);
    return retorno;
  }
  limpar(){
    this.criarCampos();
  }

  criarCampos(){
    this.primeiroNumero = new FormControl('', [Validators.required]);
    this.segundoNumero = new FormControl('', [Validators.required]);
    this.operador = new FormControl('', [Validators.required, Validators.maxLength(1)]);
  }
}
