import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService){}
  userLogged:any;

  ngOnInit(): void {

    this.auth.getUserLogged().subscribe(usuario=>{

      this.userLogged = usuario;
    });

  }

  logout() {
    this.auth.salir();
  }

}
