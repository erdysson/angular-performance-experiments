import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Post } from '../../../post/post.interface';
import { PostService } from '../../../post/post.service';
import { Todo } from '../../../todo/todo.interface';
import { TodoService } from '../../../todo/todo.service';
import { User } from '../../user.interface';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
    tab = 'details';

    posts$ = new BehaviorSubject<Post[]>([]);

    todos$ = new BehaviorSubject<Todo[]>([]);

    @Input()
    user!: User;

    @Input()
    expanded!: boolean;

    constructor(private readonly postService: PostService, private readonly todoService: TodoService) {}

    ngOnInit(): void {
        this.postService.getPostsByUser(this.user.id).subscribe((posts) => {
            this.posts$.next(posts.posts);
        });

        this.todoService.getTodosByUser(this.user.id).subscribe((todos) => {
            this.todos$.next(todos.todos);
        });
    }

    switchTab(tab: string): void {
        this.tab = tab;
    }
}
