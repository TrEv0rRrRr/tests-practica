import { Habitacion } from "./Habitacion.js";

export class Hotel {
  habitaciones: Habitacion[] = [];

  constructor(
    public nombre: string,
    public direccion: string,
    public telefono: string,
    public estrellas: number,
  ) {
    if (!nombre) throw new Error("Hotel must have a name");
  }

  agregarHabitacion(habitacion: Habitacion) {
    this.habitaciones.push(habitacion);
  }
}
