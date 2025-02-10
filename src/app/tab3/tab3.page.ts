import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService, Usuario } from '../services/user.service';

Chart.register(...registerables);

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {
  usuario: Usuario | null = null; // ✅ Se define usuario correctamente

  constructor(private userService: UserService) {}

  ionViewWillEnter() {
    this.usuario = this.userService.getUsuario(); // ✅ Obtiene el usuario actual
  }
}
