import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}

// nest g mo <name> - создает модуль
// nest g s <name> - создает сервис
// nest g co <name> - создает контроллер
