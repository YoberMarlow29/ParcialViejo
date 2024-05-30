import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private route:Router) {}

  async login() {
    this.authService.login(this.email, this.password).then((result) => {
      console.log('logueado con exito', result);
      this.email="";
      this.password="";
      this.route.navigate(['/bienvenida']);

    }).catch((error) => {
      console.error('erro login', error);
    });
  }

  btnEmpleado(){

    this.email="empleado@empleado.com";
    this.password="123456";

  }
  btnAdmin(){

    this.email="admin@admin.com";
    this.password="123456";

  }
}
