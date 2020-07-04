import { Controller, Get, Post, Body } from '@nestjs/common';
import { MensagemService } from './mensagem.service';

@Controller('mensagens')
export class MensagemController {

    constructor(private readonly mensagemService: MensagemService) {};

    @Post()
    publicarMensagem(
        @Body('nome') nomeMensagem: string, 
        @Body('email') emailMensagem: string, 
        @Body('assunto') assuntoMensagem: string, 
        @Body('mensagem') textoMensagem: string
    ) {
        this.mensagemService.publicarMensagem(nomeMensagem, emailMensagem, assuntoMensagem, textoMensagem);
    }

    @Get()
    getMensagens() {
        return this.mensagemService.getMensagens();
    }
}