import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PostService {

  constructor(private http: HttpClient) { }

  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url);
  }
}
