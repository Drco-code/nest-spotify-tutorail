import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSongDto } from './create-song-dto';

@Injectable()
export class SongsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateSongDto) {
    return this.prisma.song.create({ data });
  }

  findAll() {
    return this.prisma.song.findMany();
  }

  findOne(id: string) {
    return this.prisma.song.findUnique({ where: { id: id } });
  }

  findFirst(data: CreateSongDto) {
    const { title, releasedAt, artists } = data;

    const sortedArtists = [...artists].sort((a, b) => a.localeCompare(b));

    return this.prisma.song.findFirst({
      where: {
        title: title,
        releasedAt: releasedAt,
        artists: {
          equals: sortedArtists,
        },
      },
    });
  }
}
