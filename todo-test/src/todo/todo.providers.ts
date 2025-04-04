import { DataSource } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { Provider } from '@nestjs/common';

export const todoProviders: Array<Provider> = [
  {
    provide: 'TODO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todo),
    inject: ['DATA_SOURCE'],
  },
];
