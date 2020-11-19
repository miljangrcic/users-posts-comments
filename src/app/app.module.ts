import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    PostListComponent,
    PostComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
