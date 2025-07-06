import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SongsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
