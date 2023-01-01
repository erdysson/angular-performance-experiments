import { Component, Input } from '@angular/core';

import { Todo } from '../../todo.interface';
import { TodoService } from '../../todo.service';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
    @Input()
    todo!: Todo;

    constructor(private readonly todoService: TodoService) {}

    completeTodo(): void {
        this.todoService.updateTodo({ id: this.todo.id, completed: true }).subscribe((todo) => {
            this.todo.completed = true;
        });
    }

    deleteTodo(): void {
        this.todoService.deleteTodo(this.todo.id).subscribe((todo) => {
            // eslint-disable-next-line no-console
            console.log('deleted todo', todo);
        });
    }
}
