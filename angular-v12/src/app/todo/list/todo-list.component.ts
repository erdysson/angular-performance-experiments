import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../user/user.interface';
import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { Todo } from '../todo.interface';
import { Todos, TodoService } from '../todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    userTodoService!: Todos;

    todos$!: Observable<Todo[]>;

    @Input()
    user!: User;

    constructor(private readonly todoService: TodoService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.userTodoService = this.todoService.getForUser(this.user.id);
        this.todos$ = this.userTodoService.todos$;

        this.userTodoService.getTodos();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }
}
