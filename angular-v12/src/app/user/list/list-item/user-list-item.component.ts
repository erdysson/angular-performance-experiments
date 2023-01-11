import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../post/post.interface';
import { Posts, PostService } from '../../../post/post.service';
import { Todo } from '../../../todo/todo.interface';
import { Todos, TodoService } from '../../../todo/todo.service';
import { User } from '../../user.interface';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit, OnChanges, OnDestroy {
    tab = 'details';

    toggled = false;

    userPostService!: Posts;

    userTodoService!: Todos;

    posts$!: Observable<Post[]>;

    todos$!: Observable<Todo[]>;

    @Input()
    user!: User;

    constructor(
        private readonly postService: PostService,
        private readonly todoService: TodoService,
        private readonly userService: UserService,
    ) {}

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log('user-list-item:onInit');

        this.userPostService = this.postService.getForUser(this.user.id);
        this.userTodoService = this.todoService.getForUser(this.user.id);

        this.posts$ = this.userPostService.posts$;
        this.todos$ = this.userTodoService.todos$;

        this.userPostService.getPosts();
        this.userTodoService.getTodos();
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const change of Object.keys(changes)) {
            const object = changes[change];
            // eslint-disable-next-line no-console
            console.log(
                `user-list-item:onChanges: [${change}]`,
                'has changed from',
                object.previousValue,
                'to',
                object.currentValue,
            );
        }
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('user-list-item:onDestroy');
    }

    switchTab(tab: string): void {
        this.tab = tab;
    }

    toggle(): void {
        this.toggled = !this.toggled;
    }

    refresh(event: MouseEvent): void {
        event.stopPropagation();
        this.userService.getUser(this.user.id);
    }

    delete(event: MouseEvent): void {
        event.stopPropagation();
        this.userService.delete(this.user.id);
    }
}
