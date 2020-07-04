import { Injectable } from '@nestjs/common';
import { Mensagem } from './mensagem.model';

@Injectable()
export class MensagemService {
    mensagens: Mensagem[] = [];

    publicarMensagem(nome: string, email: string, assunto: string, mensagem: string): Mensagem {
        const novaMensagem = new Mensagem(nome, email, assunto, mensagem);
        this.mensagens.push(novaMensagem);
        return novaMensagem;
    }

    getMensagens() {
        return [...this.mensagens];
    }    
}