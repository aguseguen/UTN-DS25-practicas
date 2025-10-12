export interface RegisterBody {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  fechaNac: string;
  sexo: string;
  temaFav?: string;
}