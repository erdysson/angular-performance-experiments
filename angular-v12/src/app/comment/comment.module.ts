import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChangeDetectionLoggerModule } from '../change-detection-logger/change-detection-logger.module';

import { CommentService } from './comment.service';
import { CommentListComponent } from './list/comment-list.component';
import { CommentListItemComponent } from './list/list-item/comment-list-item.component';

@NgModule({
    imports: [CommonModule, ChangeDetectionLoggerModule],
    declarations: [CommentListComponent, CommentListItemComponent],
    exports: [CommentListComponent],
    providers: [CommentService],
})
export class CommentModule {}
