import { Habitacion } from "./Habitacion";
import { Huesped } from "./Huesped";

export class Reserva {
  estado: "Confirmada" | "Cancelada" | "Completada";
  fechaReserva: Date;
  fechaCancelacion?: Date;
  precioTotal: number;

  constructor(
    public huesped: Huesped,
    public habitacion: Habitacion,
    public fechaCheckIn: Date,
    public fechaCheckOut: Date,
  ) {
    if (!huesped) throw new Error("Reserva must have a guest");
    if (!habitacion) throw new Error("Reserva must have a room");
    if (fechaCheckOut <= fechaCheckIn) {
      throw new Error("Invalid dates");
    }

    this.estado = "Confirmada";
    this.fechaReserva = new Date();

    const noches =
      (fechaCheckOut.getTime() - fechaCheckIn.getTime()) /
      (1000 * 60 * 60 * 24);

    if (noches <= 0) throw new Error("Invalid stay duration");

    if (habitacion.capacidad < 1) {
      throw new Error("Room capacity invalid");
    }

    this.precioTotal = habitacion.precioPorNoche * noches;
  }

  cancelarReserva(fechaActual: Date) {
    const horas =
      (this.fechaCheckIn.getTime() - fechaActual.getTime()) / (1000 * 60 * 60);

    if (horas >= 24) {
      this.estado = "Cancelada";
      this.fechaCancelacion = fechaActual;
      return true;
    }

    return false;
  }

  completarReserva() {
    this.estado = "Completada";
  }
}
