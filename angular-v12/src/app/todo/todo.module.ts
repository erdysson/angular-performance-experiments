import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForModule } from '@rx-angular/template/for';

import { ChangeDetectionLoggerModule } from '../change-detection-logger/change-detection-logger.module';

import { TodoListItemComponent } from './list/item/todo-list-item.component';
import { TodoListComponent } from './list/todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
    imports: [CommonModule, ChangeDetectionLoggerModule, ForModule],
    declarations: [TodoListComponent, TodoListItemComponent],
    exports: [TodoListComponent],
    providers: [TodoService],
})
export class TodoModule {}
