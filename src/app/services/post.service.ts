import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  // tslint:disable-next-line:typedef
  getPosts() {
    return this.httpClient.get<Posts[]>(this.url);
  }


}
