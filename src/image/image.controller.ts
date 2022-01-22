import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageService } from './image.service';
import { IImage } from './interface/image.interface';

@Controller('image')
export class ImageController {
  constructor(private readonly service: ImageService) {}

  @Get()
  async findAll(): Promise<IImage[]> {
    return await this.service.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<IImage> {
    return await this.service.findOne(+id)
  }

  @Post()
  async create(@Body() dto: CreateImageDto): Promise<IImage> {
    return await this.service.create(dto)
  }
}
