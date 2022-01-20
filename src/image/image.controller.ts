import { Controller, Get } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly service: ImageService) {}

  @Get()
  async findAll() {
    return await this.service.findAll()
  }
}
