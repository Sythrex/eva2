import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  conductores: any;
  username: string='';
  users: any [] = [];

  constructor(
    private conductorService: ConductorService,
    private authService: AuthService
  ) { this.conductores = [];}



  ngOnInit() {
    console.log('ngOnInit');
    this.username = this.authService.getUserName();
    this.conductorService.getConductorLista(101).subscribe(data=>{
      this.conductores=data;
      console.log(this.conductores)
    })
    
  }
  logout() {
    this.authService.logout();
    
  }

}
