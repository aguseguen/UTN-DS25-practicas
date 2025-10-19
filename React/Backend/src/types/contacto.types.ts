export interface CreateMensajeContactoRequest {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export interface MensajeContactoData extends CreateMensajeContactoRequest {
  id: number;
  createdAt: Date;
}

export interface CreateMensajeContactoResponse {
  success: true;
  message: string;
  data: MensajeContactoData;
}

export interface GetMensajesContactoResponse {
  success: true;
  mensajes: MensajeContactoData[];
  total: number;
}
