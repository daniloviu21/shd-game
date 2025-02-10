import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {
  @Input() title !: string;

  constructor(private navController: NavController) { }

  ngOnInit() {}


navigateToLogin() {
  this.navController.navigateRoot('/login');
}

}
