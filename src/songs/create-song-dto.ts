// src/song/dto/create-song.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsDateString,
  Min,
  IsArray,
} from 'class-validator';

export class CreateSongDto {
  // 🧠 title must be a string and not empty
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  // 🎤 artist is just one name here, not an array
  @IsString({ each: true, message: 'Each Artist Must be a string' })
  @IsNotEmpty()
  @IsArray({ message: 'Artists must be an Array' })
  readonly artists: string[];

  // ⏱ duration is the number of seconds
  @IsInt()
  @Min(5, { message: 'Duration must be at least 1 second' })
  readonly duration: number;

  // 📅 releasedAt should match the Prisma field
  @IsDateString()
  readonly releasedAt: string;
}
