import { Habitacion } from "../Clases/Hotel/Habitacion.js";
import { Hotel } from "../Clases/Hotel/Hotel.js";
import { Huesped } from "../Clases/Hotel/Huesped.js";
import { Reserva } from "../Clases/Hotel/Reserva.js";

const createGuest = () =>
  new Huesped("Trevor", "Solis", "123456789", "email@gmail.com", "12456789");

const createRoom = () => {
  const hotel = new Hotel("hotel", "Av. Inventada 453", "123456789", 5);
  return new Habitacion("100", "tipo", 2, 15, hotel);
};

describe("Testing the 'Reserva' class", () => {
  test("It should throw an error if there is no guest", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    const room = createRoom();

    // Act + Assert
    expect(() => new Reserva(null as any, room, checkIn, checkOut)).toThrow(
      "Reserva must have a guest",
    );
  });

  test("It should throw an error if there is no room", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-17T10:00:00");

    const guest = createGuest();

    // Act + Assert
    expect(() => new Reserva(guest, null as any, checkIn, checkOut)).toThrow(
      "Reserva must have a room",
    );
  });

  test("It should throw an error if the check-out date is before the check-in date", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-09T10:00:00");

    const guest = createGuest();
    const room = createRoom();

    // Act + Assert
    expect(() => new Reserva(guest, room, checkIn, checkOut)).toThrow(
      "Invalid dates",
    );
  });

  test("It should throw an error if the check-out date is before the check-in date", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-09T10:00:00");

    const guest = createGuest();
    const room = createRoom();

    // Act + Assert
    expect(() => new Reserva(guest, room, checkIn, checkOut)).toThrow(
      "Invalid dates",
    );
  });

  test("It should throw an error if the check-out date and the check-in date are the same", () => {
    // Arrange
    const checkIn = new Date("2026-05-10T10:00:00");
    const checkOut = new Date("2026-05-10T10:00:00");

    const guest = createGuest();
    const room = createRoom();

    // Act + Assert
    expect(() => new Reserva(guest, room, checkIn, checkOut)).toThrow(
      "Invalid dates",
    );
  });
});
