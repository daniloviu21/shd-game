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
  correo: string;
  contraseña: string;
  nombreUsuario: string;
  videojuegos: Videojuego[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: Usuario[] = [
    {
      correo: 'angel',
      contraseña: 'tumama',
      nombreUsuario: 'UndamagedOyster',
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
    {
      correo: 'kevin',
      contraseña: 'kevin',
      nombreUsuario: 'kevin',
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
    {
      correo: 'maria@example.com',
      contraseña: 'password123',
      nombreUsuario: 'MariaGamer',
      videojuegos: [
        {
          nombreVideojuego: 'Overwatch',
          logrosTotales: 100,
          logrosCompletados: 25,
          puntosTotales: 700,
          puntosObtenidos: 175,
          imagen: "overwatch_icon.png",
          logros: [
            { nombreLogro: 'Win 10 Matches', puntos: 50 },
            { nombreLogro: 'Heal 1000 Points', puntos: 75 }
          ]
        },
        {
          nombreVideojuego: 'League of Legends',
          logrosTotales: 80,
          logrosCompletados: 20,
          puntosTotales: 400,
          puntosObtenidos: 100,
          imagen: "lol_icon.png",
          logros: [
            { nombreLogro: 'First Blood', puntos: 25 },
            { nombreLogro: 'Win a Ranked Game', puntos: 50 }
          ]
        }
      ]
    },
    {
      correo: 'john_doe@example.com',
      contraseña: 'securepass',
      nombreUsuario: 'Johnny',
      videojuegos: [
        {
          nombreVideojuego: 'The Witcher 3',
          logrosTotales: 78,
          logrosCompletados: 48,
          puntosTotales: 1500,
          puntosObtenidos: 900,
          imagen: "witcher3_icon.png",
          logros: [
            { nombreLogro: 'Complete Main Quest', puntos: 200 },
            { nombreLogro: 'Collect All Gwent Cards', puntos: 300 }
          ]
        }
      ]
    },
    {
      correo: 'lisa@example.com',
      contraseña: 'guessmeifucan',
      nombreUsuario: 'Lisbeth',
      videojuegos: [
        {
          nombreVideojuego: 'Animal Crossing',
          logrosTotales: 120,
          logrosCompletados: 85,
          puntosTotales: 1000,
          puntosObtenidos: 750,
          imagen: "animal_crossing_icon.png",
          logros: [
            { nombreLogro: 'Complete Museum', puntos: 500 },
            { nombreLogro: 'Fully Upgrade House', puntos: 250 }
          ]
        }
      ]
    },
    
  ];
  
  //creamos un usarioActual
  private usuarioActual: Usuario | null = null;

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }

  addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  authenticate(username: string, password: string): Usuario | null{
    const user = this.usuarios.find(u => u.nombreUsuario === username && u.contraseña === password);
    return user || null;  // Retorna el usuario si es encontrado, sino retorna null
  }

  
  setUsuario(usuario: Usuario) {
    this.usuarioActual = usuario;
  }

  constructor() { }
}
