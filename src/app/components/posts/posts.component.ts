import {Component, OnInit} from '@angular/core';
import {Posts} from '../../../models/Posts';

import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[];
  fullPost: Posts;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  getBubble(post: Posts) {
    this.fullPost = post;
  }


}
