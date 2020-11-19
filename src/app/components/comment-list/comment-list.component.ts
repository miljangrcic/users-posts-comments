import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import {Comment} from '../../models/comment';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() postId;
  comments : Comment[] = [];

  constructor(private postsService: PostsService) { }

  ngOnChanges() {
    this.postsService.getCommentsByPostId(this.postId).subscribe(data => {
      this.comments = data;
    })
  }

  ngOnInit() {}

}
