import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/user.service';

@Component({
  selector: 'app-item-archivement',
  templateUrl: './item-archivement.component.html',
  styleUrls: ['./item-archivement.component.scss'],
  standalone: false
})
export class ItemArchivementComponent  implements OnInit {

  @Input() usuario!: Usuario | null;
  
  constructor() { }

  ngOnInit() {}

}
