import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/boats/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/boats/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/boats/repositories/implementations/SpecificationsRepository';
import { ISpecificationRepository } from '../../modules/boats/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
