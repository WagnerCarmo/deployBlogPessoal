import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})

export class EntrarComponent implements OnInit {
  userLogin: UsuarioLogin = new UsuarioLogin

  constructor(private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit () {
    window.scroll (0,0)
  }

  logarUsuario() {

      this.authService.Entrar(this.userLogin).subscribe((resp: UsuarioLogin) => {
      this.userLogin = resp
      environment.foto = this.userLogin.foto
      environment.nome = this.userLogin.nome
      environment.token = this.userLogin.token
      environment.id = this.userLogin.id
     
      this.router.navigate(['/home'])

    }, erro => {
      if (erro.status == 500) {
        alert('Usuário e senha incorretos')
      }
    })
  }
}