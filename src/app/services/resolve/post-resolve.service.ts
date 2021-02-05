import { Injectable } from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../post/post.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }
  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getPosts();
  }
}
