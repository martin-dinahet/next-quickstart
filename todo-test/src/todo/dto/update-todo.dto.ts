import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { TodoStatus } from '../todo.type';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  title?: string | undefined;
  status?: TodoStatus | undefined;
}
