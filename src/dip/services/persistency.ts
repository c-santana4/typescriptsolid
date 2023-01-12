import { PersistencyProtocol } from '../entities/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Salvo com sucesso!');
  }
}
