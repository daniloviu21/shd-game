import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario, Videojuego } from 'src/app/services/user.service';

@Component({
  selector: 'app-item-archivement',
  templateUrl: './item-archivement.component.html',
  styleUrls: ['./item-archivement.component.scss'],
  standalone: false
})
export class ItemArchivementComponent  implements OnInit {

  @Input() usuario!: Usuario | null;
  //public juego!: Videojuego;
  
  constructor(private  navController: NavController) { }

  ngOnInit() {}

  abrirDetalles(juego: Videojuego) {
    this.navController.navigateForward(['/videojuego-detalles', { id: juego.id }]);
  }

}
