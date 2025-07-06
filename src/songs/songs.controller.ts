import {
  Controller,
  Get,
  Param,
  Put,
  Delete,
  Post,
  Body,
  ParseUUIDPipe,
  Res,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './create-song-dto';
import { Response } from 'express';

// This Controller handles requests related to songs
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  // This method handles POST(creates) requests to the /songs endpoint
  @Post()
  async create(
    @Body()
    body: CreateSongDto,
    @Res() response: Response,
  ) {
    const existingSong = await this.songsService.findFirst(body);

    if (existingSong) {
      return response.status(400).json({
        statusCode: 400,
        message: 'Song already exists',
        data: existingSong,
      });
    }

    const createSong = await this.songsService.create(body);
    if (createSong) {
      return {
        statusCode: 201,
        message: 'Song created successfully',
        data: createSong,
      };
    }
    return {
      statusCode: 500,
      message: 'Failed to create song',
    };
  }

  // This method handles GET(all songs) requests to the /songs endpoint
  @Get()
  async findAll() {
    return this.songsService.findAll();
  }

  // This method handles GET requests to the /songs/:id endpoint
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.songsService.findOne(id);
  }

  // This method handles PUT requests to the /songs endpoint
  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action updates a song with ID #${id}`;
  }

  // This method handles DELETE requests to the /songs/:id endpoint
  @Delete('id')
  delete(@Param('id') id: string): string {
    return `This action deletes a song with ID #${id}`;
  }
}
