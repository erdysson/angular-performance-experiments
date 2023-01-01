import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostModule } from '../post/post.module';
import { TodoModule } from '../todo/todo.module';

import { UserDetailsComponent } from './details/user-details.component';
import { UserListItemComponent } from './list/list-item/user-list-item.component';
import { UserListComponent } from './list/user-list.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
    declarations: [UserComponent, UserListComponent, UserListItemComponent, UserDetailsComponent],
    exports: [UserComponent],
    providers: [UserService],
    imports: [CommonModule, CdkAccordionModule, PostModule, TodoModule],
})
export class UserModule {}
