import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // optional but highly recommended to avoid multiple imports
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // export the service so it can be used in other modules
})
export class PrismaModule {}
