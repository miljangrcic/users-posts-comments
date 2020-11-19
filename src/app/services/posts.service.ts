import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../models/Post";
import { Comment } from "../models/Comment";

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

  getPostsByUserId(userID: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}/posts`;
    return this.http.get<Post[]>(url);
  }

  getCommentsByPostId(postID: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
    return this.http.get<Comment[]>(url);
  }
}
