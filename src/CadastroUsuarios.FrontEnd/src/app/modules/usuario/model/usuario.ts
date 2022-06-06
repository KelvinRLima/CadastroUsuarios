import { Escolaridade } from "./enum/escolaridade.model";

export interface Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  dataNascimento: Date;
  escolaridade: Escolaridade;
  escolaridadeString: string;
}
