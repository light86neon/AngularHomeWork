import { Injectable } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../user/user.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User>{

  constructor(private userService: UserService) { }
  // @ts-ignore
  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }
}
