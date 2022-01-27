import { Contains, IsEnum, IsOptional, Length } from 'class-validator';
import { Category } from '../enum';

export class UpdateImageDto {
  @IsOptional()
  @Length(2, 30)
  name: string;

  @IsOptional()
  @IsEnum(Category)
  category: Category;

  @IsOptional()
  @Contains('https://')
  url: string;

  @IsOptional()
  @Length(0, 100)
  description: string;
}
