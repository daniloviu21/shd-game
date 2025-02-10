import { Component, OnInit } from '@angular/core';
import { Logro, UserService, Videojuego } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-videojuego-detalles',
  templateUrl: './videojuego-detalles.page.html',
  styleUrls: ['./videojuego-detalles.page.scss'],
  standalone: false
})
export class VideojuegoDetallesPage implements OnInit {

  public juego !: Videojuego;

  constructor(private route: ActivatedRoute, private storage: Storage, private userService: UserService) {
    this.init();
   }

   async init() {
    await this.storage.create();
    this.route.queryParams.subscribe(params => {
      if (params['juego']) {
        this.juego = JSON.parse(params['juego']);
      }
    });
  }

  agregarLogro(): void {
    const nuevoLogro: Logro = {
      nombreLogro: 'Nuevo Logro',
      puntos: 10,
      completado: false
    };
    this.juego.logros.push(nuevoLogro);
    this.guardarCambios(); // Guardar después de añadir
  }

  actualizarLogro(logro: Logro): void {
    logro.completado = !logro.completado;
    this.guardarCambios(); // Guardar después de actualizar
  }

  actualizarSeleccion(index: number): void {
    // Aquí simplemente alternamos el estado de 'seleccionado' del logro en el índice dado
    this.juego.logros[index].seleccionado = !this.juego.logros[index].seleccionado;
  }

  eliminarLogro(index: number): void {
    this.juego.logros.splice(index, 1);
    this.guardarCambios(); // Guardar después de eliminar
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const juegoId = params['id'];
      const juego = this.userService.getJuegoById(juegoId);
  
      if (juego) {
        this.juego = juego;
      } else {
        console.error('Juego no encontrado!');
        // Aquí puedes manejar el caso de no encontrar el juego, como redireccionar o mostrar un mensaje de error.
      }
    });
  }

  async guardarCambios(): Promise<void> {
    await this.storage.set('videojuegos', JSON.stringify(this.juego));
  }
}
