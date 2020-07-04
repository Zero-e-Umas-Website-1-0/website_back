import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensagemModule } from './mensagem/mensagem.module';
import { MongooseModule } from '@nestjs/mongoose';

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  useNewUrlParser: true
};

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://user-zero-e-umas:juntassomos@clusterzeroeumas.jbl83.mongodb.net/<dbname>?retryWrites=true&w=majority', options), MensagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
