import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForModule } from '@rx-angular/template/for';
import { IfModule } from '@rx-angular/template/if';
import { LetModule } from '@rx-angular/template/let';

import { ChangeDetectionLoggerModule } from '../change-detection-logger/change-detection-logger.module';

import { CommentService } from './comment.service';
import { CommentListComponent } from './list/comment-list.component';
import { CommentListItemComponent } from './list/list-item/comment-list-item.component';

@NgModule({
    imports: [CommonModule, ChangeDetectionLoggerModule, LetModule, ForModule, IfModule],
    declarations: [CommentListComponent, CommentListItemComponent],
    exports: [CommentListComponent],
    providers: [CommentService],
})
export class CommentModule {}
