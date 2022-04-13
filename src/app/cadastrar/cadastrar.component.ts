import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor (
  private authSevice: AuthService,
  private router:Router

  ) { }

    ngOnInit(): void {
  }

    confirmeSenha(event:any) {
      this.confirmarSenha = event.target.value  
  }
    cadastrarUsuario () {
      this.usuario.tipo = this.tipoUsuario

      if (this.usuario.senha != this.confirmarSenha) {
        alert ("As senhas precisam ser iguais!")
      }

      else {
        this.authSevice.Cadastrar(this.usuario).subscribe((resp:Usuario) =>  {
          this.usuario = resp; 
          this.router.navigate (['/entrar'])
          alert("Usuário cadastrado com sucesso")
        })
      }      
   }
}  




