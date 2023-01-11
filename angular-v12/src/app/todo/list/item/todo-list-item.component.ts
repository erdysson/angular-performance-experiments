import { Component, Input } from '@angular/core';

import { Todo } from '../../todo.interface';
import { Todos, TodoService } from '../../todo.service';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
    readonly todoServiceInstance: Todos;

    @Input()
    userId!: number;

    @Input()
    todo!: Todo;

    constructor(todoService: TodoService) {
        this.todoServiceInstance = todoService.getForUser(this.userId);
    }

    completeTodo(): void {
        this.todoServiceInstance.updateTodo(this.todo.id, { completed: true });
    }

    deleteTodo(): void {
        this.todoServiceInstance.deleteTodo(this.todo.id);
    }
}
