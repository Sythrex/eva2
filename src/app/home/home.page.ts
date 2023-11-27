import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username: string;
  constructor(
    private authService: AuthService
  ) {
    {
      this.username = authService.getUserName(); // Inicializa username con el valor del servicio
    } 
  }
  ngOnInit(): void {
  }
  
}
