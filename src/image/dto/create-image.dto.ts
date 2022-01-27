import { Contains, IsEnum, IsOptional, Length } from 'class-validator';
import { Category } from '../enum';

export class CreateImageDto {
  id?: number;

  @Length(2, 30)
  name: string;

  @IsEnum(Category)
  category: Category;

  @Contains('https://')
  url: string;

  @IsOptional()
  @Length(0, 100)
  description: string;
}
