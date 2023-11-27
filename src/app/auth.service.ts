import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private username = 'Admin'; // Nombre de usuario actual
  private password = '123'; // Contraseña actual

  constructor(private router: Router) { }

  login(user: string, password: string): boolean {
    if (user === this.username && password === this.password) {
      this.isAuthenticated = true;
      this.username = user; // Almacena el nombre de usuario
      return true;
    } else {
      console.log("Datos incorrectos");
      return false;
    }
  }

  isauth(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }

  changeUserAndPass(newUsername: string, newPassword: string): void {
    this.username = newUsername;
    this.password = newPassword;
  }

  getUserName(): string {
    return this.username;
  }


}
