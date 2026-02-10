import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      nombre: "Sebastian Alejandro Vásquez Cartagena",
      cancion: "Lo Malo de Ser Bueno. Cuarteto de Nos."
    };
  }
}
