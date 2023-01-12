import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForModule } from '@rx-angular/template/for';
import { LetModule } from '@rx-angular/template/let';

import { ChangeDetectionLoggerModule } from '../change-detection-logger/change-detection-logger.module';
import { PostModule } from '../post/post.module';
import { TodoModule } from '../todo/todo.module';

import { UserDetailsComponent } from './details/user-details.component';
import { UserListItemComponent } from './list/list-item/user-list-item.component';
import { UserListComponent } from './list/user-list.component';
import { UserService } from './user.service';

@NgModule({
    declarations: [UserListComponent, UserListItemComponent, UserDetailsComponent],
    exports: [UserListComponent],
    imports: [CommonModule, PostModule, TodoModule, ChangeDetectionLoggerModule, ForModule, LetModule],
    providers: [UserService],
})
export class UserModule {}
