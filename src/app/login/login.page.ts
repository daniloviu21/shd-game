import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  // Alternar visibilidad de la contraseña
  togglePassword() {
    this.showPassword = !this.showPassword;
  }


  // Función de inicio de sesión
  login() {
    if (this.email && this.password) {
      console.log('Logging in with', this.email, this.password);
      // Aquí puedes redirigir a otra página después del login
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Please enter email and password');
    }
  }
}
