import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
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

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateImageDto,
  ): Promise<IImage> {
    return await this.service.update(+id, dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    return await this.service.delete(+id)
  }
}
