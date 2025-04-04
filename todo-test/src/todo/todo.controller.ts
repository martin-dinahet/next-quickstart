import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Promise<Array<Todo>> {
    return this.todoService.findAll();
  }
}
