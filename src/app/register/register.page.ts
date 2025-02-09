import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
    email: string = '';
    name: string = '';
    lastName: string = '';
    username: string = '';
    password: string = '';
    rememberMe: boolean = false;
    showPassword: boolean = false;
  
    constructor(private navCtrl: NavController) {}
  
    ngOnInit() {}
  
    // Alternar visibilidad de la contraseña
    togglePassword() {
      this.showPassword = !this.showPassword;
    }

    isValidEmail(email: string): boolean {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }
  
    isFormValid(): boolean {
      return (
        this.name.trim() !== '' && 
        this.lastName.trim() !== '' && 
        this.username.trim() !== '' && 
        this.password.trim() !== '' && 
        this.isValidEmail(this.email)  // Esta función ahora devuelve un booleano
      );
    }
    
  
    // Función de inicio de sesión
    register() {
      if (this.email && this.name && this.lastName && this.username && this.password  ) {
        console.log('Sesión iniciada con', this.username, this.password);
        // Aquí puedes redirigir a otra página después del login
        this.navCtrl.navigateForward('/tabs');
      } else {
        console.log('Rellene todos los campos');
      }
    }
  }
  