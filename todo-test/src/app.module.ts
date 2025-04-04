import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [DatabaseModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
