import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService, Usuario } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;  

  usuario!: Usuario | null;

  constructor(private navCtrl: NavController, private userService: UserService) {}

  ngOnInit() {}

  // Alternar visibilidad de la contraseña
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Función de inicio de sesión
  login() {
    if (!this.username || !this.password) {
      console.log('Por favor ingrese su usuario y contraseña');
      return;
    }

    // Usar el servicio para autenticar al usuario
    const user = this.usuario = this.userService.authenticate(this.username, this.password);

    if (user) {
      console.log('Inicio de sesión exitoso', user);
      this.navCtrl.navigateForward('/tabs'); // Redirige a tabs
      this.userService.setUsuario(user);
    } else {
      console.log('Credenciales incorrectas');
    }
  }      
}
