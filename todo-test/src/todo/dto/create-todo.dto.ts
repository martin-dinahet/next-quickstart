import { TodoStatus } from '../todo.type';

export class CreateTodoDto {
  title: string;
  status: TodoStatus;
}
