export class Huesped {
  constructor(
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public email: string,
    public documentoIdentidad: string,
  ) {
    if (!nombre || !apellido) {
      throw new Error("Huesped must have name and lastname");
    }
  }
}
