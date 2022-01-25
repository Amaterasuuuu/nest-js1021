import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { IImage } from './interface/image.interface';

@Injectable()
export class ImageService {
  private DB: IImage[]
  constructor() {
    this.DB = [
      { id: 1, name: 'Hatiko', url: 'https://bit.ly/3fF431Z', description: '' },
      { id: 2, name: 'My hero academia', url: 'https://bit.ly/3Ae5HRK', description: '' },
      { id: 3, name: 'Macbook air M1', url: 'https://bit.ly/3IqLCKV', description: '' },
    ]
  }

  async findAll(): Promise<IImage[]> {
    return this.DB
  }

  async findOne(id: number): Promise<IImage> {
    const image = this.DB.find((image: IImage) => image.id === id)
    if (!image) {
      throw new NotFoundException('Image is not defined')
      // throw new HttpException('Ты пес, ты что тут отправялешь', HttpStatus.NOT_FOUND)
    }
    return image
  }

  async create(dto: CreateImageDto): Promise<IImage> {
    const exist = this.DB.find(image => image.url === dto.url)
    if (exist) {
      throw new ConflictException('Image already exist')
    }
    dto.id = this.DB.length + 1
    this.DB.push(dto)
    return dto
  }

  async update(id: number, dto: UpdateImageDto): Promise<IImage> {
    const image = await this.findOne(id)
    Object.assign(image, dto)
    return image
  }

  async delete(id: number): Promise<void> {
    const image = await this.findOne(id)
    const imageIndex = this.DB.indexOf(image)
    this.DB.splice(imageIndex, 1)
  }
}
