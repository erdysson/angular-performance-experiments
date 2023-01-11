import { Component, Input } from '@angular/core';

import { Todo } from '../todo.interface';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
    @Input()
    userId!: number;

    @Input()
    todos!: Todo[];
}
