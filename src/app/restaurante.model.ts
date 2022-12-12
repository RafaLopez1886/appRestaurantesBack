export class Restaurante {
  nombreRestaurante: string = '';
  direccionRestaurante: string = '';
  descripcionRestaurante: string = '';
  imagenRestaurante: string = '';

  constructor(
    nombreRestaurante: string,
    descripcionRestaurante: string,
    direccionRestaurante: string,
    imagenRestaurante: string
  ) {
    this.nombreRestaurante = nombreRestaurante;
    this.direccionRestaurante = direccionRestaurante;
    this.descripcionRestaurante = descripcionRestaurante;
    this.imagenRestaurante = imagenRestaurante;
  }
}
