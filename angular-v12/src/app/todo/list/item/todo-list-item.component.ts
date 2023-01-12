import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { ComponentLifecycleLogger } from '../../../utils/component-lifecycle-logger';
import { Todo } from '../../todo.interface';
import { Todos, TodoService } from '../../todo.service';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    todoServiceInstance!: Todos;

    @Input()
    userId!: number;

    @Input()
    todo!: Todo;

    constructor(private readonly todoService: TodoService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.todoServiceInstance = this.todoService.getForUser(this.userId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    completeTodo(): void {
        this.todoServiceInstance.updateTodo(this.todo.id, { completed: true });
    }

    deleteTodo(): void {
        this.todoServiceInstance.deleteTodo(this.todo.id);
    }
}
