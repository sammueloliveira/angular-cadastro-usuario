import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pessoa } from '../../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
    ]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  btnCadastrar: boolean = true;

  vetor: Pessoa[] = [];

  indice: number = -1;

  cadastrar() {
    this.vetor.push(this.formulario.value as Pessoa);

    this.formulario.reset();
  }

  selecionar(indice: number) {
    this.indice = indice;

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    });

    this.btnCadastrar = false
  }
   
   alterar() {
    this.vetor[this.indice] = this.formulario.value as Pessoa

    this.formulario.reset()

    this.btnCadastrar = true
   }

   remover() {
    this.vetor.splice(this.indice, 1)

    this.formulario.reset()

    this.btnCadastrar = true
   }

   cancelar() {

    this.formulario.reset()

    this.btnCadastrar = true
   }
}
