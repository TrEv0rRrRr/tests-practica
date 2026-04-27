import { Hotel } from "./Hotel";

export class Habitacion {
  constructor(
    public numero: string,
    public tipo: string,
    public capacidad: number,
    public precioPorNoche: number,
    public hotel: Hotel,
  ) {
    if (!hotel) throw new Error("Habitacion must belong to a hotel");
    if (precioPorNoche <= 0) throw new Error("Invalid price");
    if (capacidad <= 0) throw new Error("Invalid capacity");
  }
}
