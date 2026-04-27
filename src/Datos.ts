import { Habitacion } from "./Clases/Hotel/Habitacion.js";
import { Hotel } from "./Clases/Hotel/Hotel.js";
import { Huesped } from "./Clases/Hotel/Huesped.js";

export const huesped = new Huesped(
  "Trevor",
  "Solis",
  "123456789",
  "email@gmail.com",
  "12456789",
);

const hotel = new Hotel("hotel", "Av. Inventada 453", "123456789", 5);

export const habitacion = new Habitacion("100", "tipo", 2, 15, hotel);
