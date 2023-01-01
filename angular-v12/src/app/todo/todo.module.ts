import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoListItemComponent } from './list/item/todo-list-item.component';
import { TodoListComponent } from './list/todo-list.component';
import { TodoService } from './todo.service';

@NgModule({
    imports: [CommonModule],
    declarations: [TodoListComponent, TodoListItemComponent],
    exports: [TodoListComponent],
    providers: [TodoService],
})
export class TodoModule {}
