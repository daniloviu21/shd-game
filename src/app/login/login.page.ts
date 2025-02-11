import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
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

  constructor(
    private navCtrl: NavController, 
    private userService: UserService, 
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  // Alternar visibilidad de la contraseña
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Función de inicio de sesión
  async login() {
    if (!this.username || !this.password) {
      await this.showToast('Por favor ingrese su usuario y contraseña', 'warning');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
      duration: 5000,
    });
  
    await loading.present();
  
    try {
      this.usuario = this.userService.authenticate(this.username, this.password);
  
      if (this.usuario) {
        console.log('Inicio de sesión exitoso', this.usuario);
        this.userService.setUsuario(this.usuario);
        await this.navCtrl.navigateForward('/tabs');
      } else {
        await this.showToast('Credenciales incorrectas');
      }
    } catch (error) {
      await this.showToast('Error al iniciar sesión');
      console.error('Error de login', error);
    } finally {
      await loading.dismiss();
    }
  }
  
  async showToast(message: string, color: string = 'warning') {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      color,
    });

    await toast.present();
  }
}
