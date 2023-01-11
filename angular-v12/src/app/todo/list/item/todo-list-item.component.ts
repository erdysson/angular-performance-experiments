import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Todo } from '../../todo.interface';
import { Todos, TodoService } from '../../todo.service';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit, OnChanges, OnDestroy {
    readonly todoServiceInstance: Todos;

    @Input()
    userId!: number;

    @Input()
    todo!: Todo;

    constructor(todoService: TodoService) {
        this.todoServiceInstance = todoService.getForUser(this.userId);
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`todo-list-item:onInit`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const change of Object.keys(changes)) {
            const object = changes[change];
            // eslint-disable-next-line no-console
            console.log(
                `todo-list-item:onChanges: [${change}]`,
                'has changed from',
                object.previousValue,
                'to',
                object.currentValue,
            );
        }
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log(`todo-list-item:onDestroy`);
    }

    completeTodo(): void {
        this.todoServiceInstance.updateTodo(this.todo.id, { completed: true });
    }

    deleteTodo(): void {
        this.todoServiceInstance.deleteTodo(this.todo.id);
    }
}
