import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      nombre: "Sebastian Alejandro Vásquez Cartagena",
      cancion: "Porfiado. Cuarteto de Nos"
    };
  }
}
