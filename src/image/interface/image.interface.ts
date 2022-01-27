import { Category } from '../enum';

export interface IImage {
  id?: number;
  name: string;
  category: Category;
  url: string;
  description: string;
}
