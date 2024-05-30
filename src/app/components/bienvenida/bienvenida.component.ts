import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export default class BienvenidaComponent implements OnInit {


  userData: any;

  constructor(private gitHubService: AuthService) {}

  ngOnInit() {
    this.gitHubService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }


}
