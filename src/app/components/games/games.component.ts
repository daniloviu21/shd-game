import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  standalone: false
})
export class GamesComponent  implements OnInit {

  @Input() usuario!: Usuario;

  constructor() { }

  ngOnInit() {}

}
