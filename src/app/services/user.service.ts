import { Injectable } from '@angular/core';

export interface Logro {
  nombreLogro: string;
  puntos: number;
}

export interface Videojuego {
  nombreVideojuego: string;
  logrosTotales: number;
  logrosCompletados: number;
  puntosTotales: number;
  puntosObtenidos: number;
  imagen: string;
  logros: Logro[];
}

export interface Usuario {
  usuario: string;
  contraseña: string;
  nombreUsuario: string;
  videojuegos: Videojuego[];
  points: number;
  avatarUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: Usuario[] = [
    {
      usuario: 'angel',
      contraseña: 'tumama',
      nombreUsuario: 'UndamagedOyster',
      points: 0,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      videojuegos: [
        {
          nombreVideojuego: 'Minecraft',
          logrosTotales: 150,
          logrosCompletados: 30,
          puntosTotales: 1000,
          puntosObtenidos: 150,
          imagen: "Holaaaaaaaaaaa",
          logros: [
            { nombreLogro: 'Construir Casa', puntos: 50 },
            { nombreLogro: 'Sobrevivir la Noche', puntos: 100 }
          ]
        },
        {
          nombreVideojuego: 'Fortnite',
          logrosTotales: 200,
          logrosCompletados: 50,
          puntosTotales: 1500,
          puntosObtenidos: 300,
          imagen: "",
          logros: [
            { nombreLogro: 'Primera Victoria', puntos: 150 },
            { nombreLogro: '100 Enemigos Derrotados', puntos: 150 }
          ]
        }
      ]
    },
    // Añade más usuarios como necesites
  ];


  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  calcularPuntosUsuario(usuario: Usuario): void {
    usuario.points = usuario.videojuegos.reduce((total, videojuego) => total + videojuego.puntosObtenidos, 0);
  }

  constructor() { 
    this.usuarios.forEach(usuario => this.calcularPuntosUsuario(usuario));
  }
}
