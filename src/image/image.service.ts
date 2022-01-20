import { Injectable } from '@nestjs/common';
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

  async findAll() {
    return this.DB
  }
}
