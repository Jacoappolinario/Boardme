import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/boats/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/boats/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
