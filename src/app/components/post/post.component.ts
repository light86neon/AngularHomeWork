import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Posts} from '../../../models/Posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Posts;

  @Output()
  bubbleUp = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPostInfo(post): void {
    this.bubbleUp.emit(post);
  }

}
