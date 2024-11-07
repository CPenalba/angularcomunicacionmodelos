export class Producto {
  //para que las propiedades sean accesibles, necesitamos que sean public
  public nombre: string;
  public imagen: string;
  public precio: number;

  //tendremos un constructor para recibir los datos
  constructor(name: string, image: string, price: number) {
    this.nombre = name;
    this.imagen = image;
    this.precio = price;
  }
}
