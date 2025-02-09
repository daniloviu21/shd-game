import { Component } from '@angular/core';
import { UserService, Usuario } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  usuario!: Usuario;
  
    constructor(private userService: UserService) {
      this.loadUsuario();
    }
  
    loadUsuario(){
      this.usuario = this.userService.getUsuarios()[0];
    }

}
