import { MessagingProtocol } from '../entities/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
}
