import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';

import { User } from '../../user/user.interface';
import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { Todo } from '../todo.interface';
import { Todos, TodoService } from '../todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RxState],
})
export class TodoListComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    userTodoService!: Todos;

    todos$!: Observable<Todo[]>;

    @Input()
    user!: User;

    constructor(private readonly state: RxState<{ todos: Todo[] }>, private readonly todoService: TodoService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.userTodoService = this.todoService.getForUser(this.user.id);

        this.state.connect('todos', this.userTodoService.todos$);
        this.todos$ = this.state.select('todos');

        this.userTodoService.getTodos();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    trackById(index: number, todo: Todo): number {
        return todo.id;
    }
}
