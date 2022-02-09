import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts = [] as any;
  p: number = 1;

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this._postService.getPosts()
        .subscribe(data => this.posts = data);
  }
}
