import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@Inject('TODO_REPOSITORY') private todoRepository: Repository<Todo>) {}

  findAll = async (): Promise<Array<Todo>> => {
    return this.todoRepository.find();
  };
}
