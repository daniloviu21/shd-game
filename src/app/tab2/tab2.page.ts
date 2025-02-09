import { Component } from '@angular/core';
import { UserService, Usuario } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  usuario!: Usuario;

  constructor(private userService: UserService) {
    this.loadUsuario();
  }

  loadUsuario(){
    this.usuario = this.userService.getUsuarios()[0];
  }
}
