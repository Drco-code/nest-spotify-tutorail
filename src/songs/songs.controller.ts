import { Controller } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll(): string {
    return 'This action returns all songs';
  }
}
