import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() userId = null;
  posts : Post[] = []
  @Output() onSelect = new EventEmitter<Post>();
  selectedRow : number= -1;

  constructor(private postsService : PostsService) { }

  emitSelect(post: Post, index: number) {
    this.selectedRow = index;
    this.onSelect.emit(post);
  }

  ngOnInit() {
    this.postsService.getPostsByUserId(this.userId)
    .subscribe( data => {
      this.posts = data;
    })
  }

}
