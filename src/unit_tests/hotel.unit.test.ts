import { Reserva } from "../Clases/Hotel/Reserva.js";
import { habitacion, huesped } from "../Datos.js";

describe("Testing the 'Reserva' class", () => {
  test("It should initialize booking with 'Confirmada' state", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    //  Act
    const booking = new Reserva(huesped, habitacion, checkIn, checkOut);

    // Assert
    expect(booking.precioTotal).toBe(105);
  });

  test("It should be possible to change the booking state to 'Confirmado'", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    //  Act
    const booking = new Reserva(huesped, habitacion, checkIn, checkOut);

    // Assert
    expect(booking.estado).toBe("Confirmada");
  });

  test("It should be possible to cancel the booking if the current date is at least 24h before the check-in", () => {
    // Arrange
    const now = new Date("2026-05-09T10:00:00");
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    //  Act
    const booking = new Reserva(huesped, habitacion, checkIn, checkOut);

    booking.cancelarReserva(now);

    // Assert
    expect(booking.estado).toBe("Cancelada");
  });

  test("It should not be possible to cancel the booking if the current date is at least 24h after the check-in", () => {
    // Arrange
    const now = new Date("2026-05-11T10:00:00");
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    //  Act
    const booking = new Reserva(huesped, habitacion, checkIn, checkOut);

    booking.cancelarReserva(now);

    // Assert
    expect(booking.estado).toBe("Confirmada");
  });

  test("It should be possible to complete the booking", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    // Act
    const booking = new Reserva(huesped, habitacion, checkIn, checkOut);

    booking.completarReserva();

    // Assert
    expect(booking.estado).toBe("Completada");
  });
});
