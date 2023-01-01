import { NgModule } from '@angular/core';

import { CartService } from './cart.service';
import { CommentService } from './comment.service';
import { PostService } from './post.service';
import { ProductService } from './product.service';
import { QuoteService } from './quote.service';
import { TodoService } from './todo.service';
import { UserService } from './user.service';

@NgModule({
    providers: [CartService, CommentService, PostService, ProductService, QuoteService, TodoService, UserService],
})
export class DataModule {}
