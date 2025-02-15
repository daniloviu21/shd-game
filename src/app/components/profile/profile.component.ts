import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false
})
export class ProfileComponent  implements OnInit {

  @Input() usuario!: Usuario;

  constructor() { }

  ngOnInit() {}

}
