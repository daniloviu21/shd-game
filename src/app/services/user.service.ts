import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Logro {
  nombreLogro: string;
  puntos: number;
  completado?: boolean; // Añadir este campo para manejar el estado de completado
  seleccionado?: boolean; // Añadido para manejar la selección para eliminación
}

export interface Videojuego {
  id: string;  // Asegúrate de que cada juego tenga un identificador único
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
  points: number;
  avatarUrl: string;
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
      points: 0,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      videojuegos: [
        {
          id: "2288282828822",
          nombreVideojuego: 'Minecraft',
          logrosTotales: 150,
          logrosCompletados: 30,
          puntosTotales: 1000,
          puntosObtenidos: 150,
          imagen: "assets/images/minecraft.jpg",
          logros: [
            { nombreLogro: 'Construir Casa', puntos: 50 },
            { nombreLogro: 'Sobrevivir la Noche', puntos: 100 }
          ]
        },
        {
          id: "2727636782000",
          nombreVideojuego: 'Fortnite',
          logrosTotales: 200,
          logrosCompletados: 50,
          puntosTotales: 1500,
          puntosObtenidos: 300,
          imagen: "assets/images/fortnite.png",
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
      points: 0,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      videojuegos: [
        {
          id: "764647393973",
          nombreVideojuego: 'Overwatch',
          logrosTotales: 100,
          logrosCompletados: 25,
          puntosTotales: 700,
          puntosObtenidos: 175,
          imagen: "assets/images/overwatch.png",
          logros: [
            { nombreLogro: 'Win 10 Matches', puntos: 50 },
            { nombreLogro: 'Heal 1000 Points', puntos: 75 }
          ]
        },
        {
          id: "292939444433",
          nombreVideojuego: 'League of Legends',
          logrosTotales: 80,
          logrosCompletados: 20,
          puntosTotales: 400,
          puntosObtenidos: 100,
          imagen: "assets/images/leagueoflegends.png",
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
      points: 0,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      videojuegos: [
        {
          id: "0981811872899",
          nombreVideojuego: 'The Witcher 3',
          logrosTotales: 78,
          logrosCompletados: 48,
          puntosTotales: 1500,
          puntosObtenidos: 900,
          imagen: "assets/images/thewitcher.jpg",
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
      points: 0,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      videojuegos: [
        {
          id: "10028837892",
          nombreVideojuego: 'Animal Crossing',
          logrosTotales: 120,
          logrosCompletados: 85,
          puntosTotales: 1000,
          puntosObtenidos: 750,
          imagen: "assets/images/animalcrossing.png",
          logros: [
            { nombreLogro: 'Complete Museum', puntos: 500 },
            { nombreLogro: 'Fully Upgrade House', puntos: 250 }
          ]
        }
      ]
    }
  ];
  
  //creamos un usarioActual
  private usuarioActual: Usuario | null = null;

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }

  addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  calcularPuntosUsuario(usuario: Usuario): void {
    usuario.points = usuario.videojuegos.reduce((total, videojuego) => total + videojuego.puntosObtenidos, 0);
  }

  constructor(private storage: Storage) { 
    this.usuarios.forEach(usuario => this.calcularPuntosUsuario(usuario));
    this.init();
  }

  async init() {
    await this.storage.create();
    this.loadInitialData();
  }

  authenticate(username: string, password: string): Usuario | null {
    const user = this.usuarios.find(u => u.nombreUsuario === username && u.contraseña === password);
    if (user) {
      this.setUsuario(user);
      this.saveCurrentUser();  // Guarda el usuario actual en el almacenamiento local
    }
    return user || null;
  }

  setUsuario(usuario: Usuario) {
    this.usuarioActual = usuario;
  }

  async loadInitialData(): Promise<void> {
    await this.loadCurrentUser();
  }

  async loadCurrentUser(): Promise<void> {
    const user = await this.storage.get('currentUser');
    this.usuarioActual = user ? user as Usuario : null;
  }

  async saveCurrentUser(): Promise<void> {
    if (this.usuarioActual) {
      await this.storage.set('currentUser', this.usuarioActual);
    }
  }

  getJuegoById(juegoId: string): Videojuego | undefined {
    for (const usuario of this.usuarios) {
      const juego = usuario.videojuegos.find(j => j.id === juegoId);
      if (juego) {
        return juego;
      }
    }
    return undefined;  // Retorna undefined si no se encuentra el juego
  }
}
