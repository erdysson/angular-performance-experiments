import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { ForModule } from '@rx-angular/template/for';
import { LetModule } from '@rx-angular/template/let';
import { PushModule } from '@rx-angular/template/push';

import { ChangeDetectionLoggerModule } from '../change-detection-logger/change-detection-logger.module';
import { CommentModule } from '../comment/comment.module';

import { PostListItemComponent } from './list/list-item/post-list-item.component';
import { PostListComponent } from './list/post-list.component';
import { PostService } from './post.service';

@NgModule({
    declarations: [PostListComponent, PostListItemComponent],
    exports: [PostListComponent],
    providers: [PostService],
    imports: [
        CommonModule,
        CommentModule,
        CdkAccordionModule,
        ChangeDetectionLoggerModule,
        ReactiveComponentModule,
        PushModule,
        LetModule,
        ForModule,
    ],
})
export class PostModule {}
