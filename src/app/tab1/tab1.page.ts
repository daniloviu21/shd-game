import { Component } from '@angular/core';
import { UserService, Usuario, Videojuego} from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  usuario!: Usuario;
  //juego?: Videojuego;  // Asumiendo que tienes un tipo Videojuego
  juegosDisponibles!: Videojuego[]; 
  
    constructor(public userService: UserService) {
      this.loadUsuario();
      this.loadJuegosDisponibles();  // Llamar a la función que carga los juegos disponibles
    }
  
    loadUsuario() {
      const usuario = this.userService.getUsuario();
      if (usuario) {
        this.usuario = usuario;
      } else {
        console.error('No hay un usuario autenticado.');
      }
    }

    loadJuegosDisponibles() {
      // Esto puede ser un llamado a un servicio o simplemente asignar una lista estática
      this.juegosDisponibles = this.userService.getJuegosDisponibles();
    }

    agregarJuegoAUsuario(juego: Videojuego) {
      this.userService.agregarJuegoAUsuario(juego);
      this.loadUsuario();  // Recargar la información del usuario para actualizar la UI
    }

}
